"use client"

import React, { useState } from 'react'
import { SectionHeading } from './section-heading'
import toast from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'
import { SubmitBtn } from './submit-btn'
import { SendEmail } from '@/actions/send-email'

const FormSchema = z.object({
  senderEmail: z.string().email({ message: "Invalid email address" }),
  message: z.string().max(1000, {
    message: "Message must not be longer than 1000 characters.",
  }),

})

export const Contact = () => {
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      senderEmail: '',
      message: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setPending(true)

    try {
      await SendEmail(data);
      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to send message.');
      console.error('Error sending message:', error);
    } finally {
      setPending(false);
    }

  }

  return (
    <section className='mb-20 sm:mb-28 px-4 sm:px-2 text-center'>
      <SectionHeading>Try our free demo</SectionHeading>
      <p className='text-gray-700' >
        If you're interested in trying our services for free or have any
        questions, don't hesitate to contact us today!
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto w-full space-y-6 mt-10">
          <FormField
            control={form.control}
            name="senderEmail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message..."
                    className="resize-none h-52 my-3"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitBtn pending={pending} />
        </form>
      </Form>
    </section >
  )
}








