"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site.config";
import {layoutConfig} from "@/config/layout.config";

export const Logo = () => {
    return <Image src="/logo.png"
                  alt={siteConfig.title}
                  width={36}
                  height={36}
                  priority
    />;
};

export default function Header() {

    const pathname = usePathname();

    const getNavItems = () =>{
        return siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return(
                    <NavbarItem key={item.href}>
                        <Link
                            color="foreground"
                            href={item.href}
                            className={`px-3 py-1
                                ${isActive ? "text-blue-500" : "text-foreground"} 
                                hover:text-blue-300 
                                hover:border-blue-300 
                                transition-colors
                                transition-border 
                                duration-200
                                `}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                )
            }
        )
    }


    return (
        <Navbar
            style={{height: layoutConfig.heightHeader}}>
            <NavbarBrand>
                <Link href="/" className="flex items-center gap-1">
                    <Logo/>
                    <p className="font-bold text-inherit">{siteConfig.title}</p>
                </Link>

            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {getNavItems()}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Логин</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Регистрация
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
