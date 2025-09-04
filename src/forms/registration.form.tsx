"use client"

import React, {useState, type FormEvent, type ChangeEvent} from "react";
import {Form} from "@heroui/form";
import {Input} from "@heroui/input";
import {Button} from "@heroui/react";

interface IProps {
    onClose: () => void;
}

const RegistrationForm:React.FC<IProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted", formData);

        onClose();
    };


    return (
       <Form className="w-full" onSubmit={handleSubmit}>
           <Input
               aria-label="Email"
               isRequired
               name="email"
               type="email"
               placeholder="Введите email"
               value={formData.email}
               classNames={{
                   inputWrapper:"bg-default-100",
                   input:"text-sm focus:outline-none "
               }}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
               validate={(value) => {
                   if(!value) return "Email обязателен";
                   if (!validateEmail(value)) return "Некорректный email";
                   return null;
               }}

           >

           </Input>

           <Input
               aria-label="Пароль"
               isRequired
               name="password"
               placeholder="Введите пароль"
               type="password"
               value={formData.password}
               classNames={{
                   inputWrapper:"bg-default-100",
                   input:"text-sm focus:outline-none "
               }}
               onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({...formData, password: e.target.value})}
               validate={(value) => {
                   if(!value) return "Пароль обязателен";
                   if (value.length < 6) return "Пароль должен быть не менее 6 символов";
                   return null;
               }}
           >
           </Input>

           <Input
               aria-label="Подтвердите пароль"
               isRequired
               name="confirmPassword"
               placeholder="Подтвердите пароль"
               type="password"
               value={formData.confirmPassword}
               classNames={{
                   inputWrapper:"bg-default-100",
                   input:"text-sm focus:outline-none "
               }}
               onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({...formData, confirmPassword: e.target.value})}
               validate={(value) => {
                   if(!value) return "Подтверждение пароля обязательно";
                   if (value !== formData.password) return "Пароли не совпадают";
                   return null;
               }}
           >

           </Input>

           <div className="flex w-[100%] gap-4 items-center justify-end pt-8">
               <Button variant="light" onPress={onClose}>
                   Отмена
               </Button>
               <Button color="primary" type="submit">
                   Зарегистрироваться
               </Button>
           </div>
       </Form>
    );
}

export default RegistrationForm;