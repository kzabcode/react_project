import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseDistiller, chooseAge, chooseColor, choosePercent } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface ContactFormProps {
  id?:string;
  data?:{}
}

interface ContactState {
  distiller: string;
  age: string;
  color: string;
  percent: string;
};

export const ContactForm = (props:ContactFormProps) => {

  const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
  const store = useStore();
  const name = useSelector<ContactState>(state => state.distiller);
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data:any, event:any) => {
      console.log(props.id)
      // The ! is for strictly typed Typescript stuff
      if(props.id!){
          server_calls.update(props.id!, data);
          console.log(`Updated:${data} ${props.id}`);
          console.log(data);
          setTimeout( () => {window.location.reload()}, 1000);
          event.target.reset();
      } else {
          // Dispatch basically updates our state / Redux store
          dispatch(chooseDistiller(data.distiller));
          dispatch(chooseAge(data.age));
          dispatch(chooseColor(data.color));
          dispatch(choosePercent(data.percent));
          server_calls.create(store.getState());
          setTimeout( () => {window.location.reload()}, 1000)
      }
  };

  return (
    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="distiller">Distiller</label>
                <Input {...register('distiller')} name="distiller" placeholder='Distiller'/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <Input {...register('age')} name="age" placeholder='Age'/>
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <Input {...register('color')} name="color" placeholder='Color'/>
            </div>
            <div>
                <label htmlFor="percent">Percent</label>
                <Input {...register('percent')} name="percent" placeholder='Percent'/>
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    </div>
)
}
