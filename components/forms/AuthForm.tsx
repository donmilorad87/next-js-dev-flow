"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form"
import { z, ZodType } from "zod"
import ROUTES from "@/constants/routes"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"


interface AuthFormProps<T extends FieldValues>{
  schema: ZodType<T>;
  defaultValues: T;
  formType: 'SIGN_UP' | 'SIGN_IN';
  onSubmit: (data: T) => Promise<{success: boolean}>;
}

const AuthForm = <T extends FieldValues> ({schema, defaultValues, formType, onSubmit}: AuthFormProps<T>)=> {

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  })
 
  // 2. Define a submit handler.
  const handleSubmit: SubmitHandler<T> = async () => {

  }

  const buttonText = formType === 'SIGN_UP' ? 'Sign Up' : 'Sign In'
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-10 space-y-6">
 
        {
        Object.keys(defaultValues).map((field) => (
            <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2.5 w-full">
                <FormLabel className="paragraf-medium text-dark400_light700">{field.name === 'email' ? "Email Address" : field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormLabel>
                <FormControl>
                  <Input required type={field.name === 'password' ? 'password' : 'text' } {...field} className="paragraf-regular background-light900_dark300 light-border-2 text-dark300 light700 bo-focus min-h-12 rounded-1.5 border "/>
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
        ))
    }
        
        <Button disabled={form.formState.isSubmitting} className="primary-gradient paragraf medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900">{form.formState.isSubmitting ? buttonText === "Sign In" ? "Signing In..." : "Signing Up..." : buttonText}</Button>
        {formType === "SIGN_IN" ? <p>Dont't have account? {" "} <Link href={ROUTES.SIGN_UP} className="paragraf-semibold primary-text-gradient"> Sign in</Link></p>  : <p>Allready have an account? {" "} <Link href={ROUTES.SIGN_IN} className="paragraf-semibold primary-text-gradient"> Sign in</Link></p> }
      </form>
    </Form>
  )
}

export default AuthForm