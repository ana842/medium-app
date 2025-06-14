import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { signinInput, signupInput } from "@ana23kxx/medium-common";


export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET : string;
	}
}>();

userRouter.post('/signup', async(c) => {
	const prisma = new PrismaClient({
	datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

	const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message : "Invalid Inputs"
        })
    }
	try {
		const person = await prisma.user.create({
			data:{
				username : body.username,
				password : body.password,
				name : body.name
		}})
		const jwt = await sign({
			id : person.id
		}, c.env.JWT_SECRET); 
		return c.json({
			token : jwt,
			msg : "User Signed Up"
		});
	} catch (error) {
		c.status(404)
		return c.text(`Sign up failure... The error is ${error}`);
	}
})

userRouter.post('/signin', async(c) => {
	const prisma = new PrismaClient({
	datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

	const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message : "Invalid Inputs"
        })
    }
	try {
		const person = await prisma.user.findFirst({
			where:{
				username : body.username,
				password : body.password,
		}})
		if(!person){
			c.status(403);
			return c.json({
				msg : "Invalid Creds"
			});
		}
		const jwt = await sign({
			id : person.id
		}, c.env.JWT_SECRET); 
		return c.json({
			token : jwt,
			msg : "Login Success"
		});
	} catch (error) {
		c.status(404)
		return c.text(`Sign in failure... The error is ${error}`);
	}
})
