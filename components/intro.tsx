"use client"

import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from '@/components/ui/separator'
import toast from "react-hot-toast";
import { SendEmail } from '@/actions/send-email'
import { SubmitBtn } from './submit-btn'

const FormSchema = z.object({
  senderEmail: z.string().email({ message: "Invalid email address" }),
})


export const Intro = () => {
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      senderEmail: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setPending(true)
    console.log(data, `data`)

    try {
      await SendEmail(data);
      toast.success('Email sent successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to send Email.');
      console.error('Error sending Email:', error);
    } finally {
      setPending(false);
    }


  }

  return (
    <>
      {/* insert custom landing page image bg-intro */}
      <section className='intro-section p-10 sm:mb-0 scroll-mt-[100rem] bg-intro'>
        <motion.div
          className="flex flex-col items-center justify-center gap-5 h-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <motion.h1
              className="mb-5 text-3xl z-[999] text-black font-bold italic !leading-[1.5] sm:text-3xl"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Write landing page catch line!
            </motion.h1>
          </div>


          <Form {...form}>
            <motion.form
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={form.handleSubmit(onSubmit)}
              // className="flex w-full max-w-lg items-center space-x-2"
              className="w-1/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="senderEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className='text-black text-lg'
                    >
                      Enter your email to try our free demo
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder="Enter email..."
                        {...field} />
                    </FormControl>
                    <FormMessage
                      className='text-lg'
                    />
                  </FormItem>
                )}
              />
              {/* <Button type="submit"> Free demo</Button> */}
              <SubmitBtn pending={pending} />
            </motion.form>
          </Form>
        </motion.div>
      </section>
      <Separator />
    </>
  )
}


