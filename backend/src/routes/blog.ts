import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from "@ana23kxx/medium-common";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET : string;
	},
    Variables: {
        authorID: string;
    }
}>();

blogRouter.use('/*', async(c,next)=>{
    const authHeader = c.req.header("Authorization") || "";
    if(!authHeader.startsWith("Bearer ")){
        c.status(401);
        return c.json({message : "Invalid Authorization Header"})
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = await verify(token, c.env.JWT_SECRET)
        if(!payload || typeof(payload) !== 'object' || !payload.id){
            c.status(401);
            c.json({msg : "Unauthorized"});
        }else{
            c.set("authorID", payload.id as string);
            await next();
        }
    } catch (error) {
        return c.json({
            message : "Authentication Failure"
        })
    }
    
})

blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({
                message : "Invalid Inputs"
            })
        }
    const authorID = c.get("authorID");
    try {
        const createdBlog = await prisma.post.create({
            data:{
                title: body.title,
                content: body.content,
                authorId : authorID
            }
        })
        c.status(200);
        return c.json({
            message: 'Blog created successfully', 
            data: createdBlog,
            blogID : createdBlog.id
        });
    } catch (error) {
        c.status(404)
		return c.text(`Error creating the blog... \nThe error is ${error}`);
    }
})

blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({
                message : "Invalid Inputs"
            })
        }
    try {
        const updatedBlog = await prisma.post.update({
            where:{
                id: body.id
            },data:{
                title: body.title,
                content: body.content,
            }
        })
        c.status(200);
        return c.json({
            message: 'Blog updated successfully', 
            data: updatedBlog
        });
    } catch (error) {
        c.status(404)
		return c.text(`Error updating the blog... \nThe error is ${error}`);
    }
})

blogRouter.get('/id/:id', async(c) => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param("id");
    try {
        const Blog = await prisma.post.findFirst({
            where:{
                id: id
            },
            select:{
                title : true,
                content : true,
                author:{
                    select : {
                        name : true,
                        username : true
                    }
                },
                id : true
            }
        })
        c.status(200);
        return c.json({
            Blog
        });
    } catch (error) {
        c.status(404)
		return c.text(`Blog not found... \nThe error is ${error}`);
    }
})

blogRouter.get('/bulk', async(c) => {
const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.post.findMany({
            select : {
                title : true,
                content : true,
                author:{
                    select : {
                        name : true,
                        username : true
                    }
                },
                id : true
            }
        });
        c.status(200);
        return c.json({
            blogs
        });
    } catch (error) {
        c.status(404)
		return c.text(`Error fetching the blogs... \nThe error is ${error}`);
    }
})

