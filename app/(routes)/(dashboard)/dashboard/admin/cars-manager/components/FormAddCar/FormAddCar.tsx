'use client';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formSchema } from './FormAddCar.form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dispatch, SetStateAction, useState } from 'react';
import { UploadButton } from '@/utils/uploadthing';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

interface Props {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}
export const FormAddCar = ({ setOpenDialog }: Props) => {
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cv: '',
      transmission: '',
      people: '',
      photo: '',
      engine: '',
      type: '',
      priceDay: '',
      isPublish: false,
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // console.log(values);
    setOpenDialog(false);
    try {
      await axios.post('/api/car', values);
      toast({
        title: 'Car created ✅.',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Something went wrong.',
        variant: 'destructive',
      });
    }
  };
  const { isValid } = form.formState;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='grid gap-6 lg:grid-cols-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Name</FormLabel>
                <FormControl>
                  <Input placeholder='Tesla Model S' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='cv'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Power</FormLabel>
                <FormControl>
                  <Input placeholder='150 CV' type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='transmission'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmission</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select the type of car' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='manual'>Manual</SelectItem>
                    <SelectItem value='automatic'>Automatic</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='people'
            render={({ field }) => (
              <FormItem>
                <FormLabel>People</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select the quantity of people' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='4'>4</SelectItem>
                    <SelectItem value='5'>5</SelectItem>
                    <SelectItem value='6'>6</SelectItem>
                    <SelectItem value='7'>7</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='engine'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select the engine of the car' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='gasoil'>Gas Oil</SelectItem>
                    <SelectItem value='diesel'>Diesel</SelectItem>
                    <SelectItem value='electric'>Electric</SelectItem>
                    <SelectItem value='hybrid'>Hybrid</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select the type of car' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='sedan'>Sedan</SelectItem>
                    <SelectItem value='suv'>SUV</SelectItem>
                    <SelectItem value='coupe'>Coupe</SelectItem>
                    <SelectItem value='familiar'>Familiar</SelectItem>
                    <SelectItem value='luxe'>De luxe</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='photo'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Image</FormLabel>
                <FormControl>
                  {photoUploaded ? (
                    <p className='text-sm'>Image uploaded!</p>
                  ) : (
                    <UploadButton
                      className='rounded-lg bg-slate-600/20 text-slate-800 outline-dotted'
                      {...field}
                      endpoint='photo'
                      onClientUploadComplete={(res) => {
                        form.setValue('photo', res?.[0].url);
                        setPhotoUploaded(true);
                      }}
                      onUploadError={(error: Error) => console.log(error)}
                    />
                  )}
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='priceDay'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price per Day</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='$20' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type='submit' className='mt-5 w-full' disabled={!isValid}>
          Create Car
        </Button>
      </form>
    </Form>
  );
};
