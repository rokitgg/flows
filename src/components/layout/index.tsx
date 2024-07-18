import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
  
import { Settings } from "lucide-react";


export function Header () {
    return(
        <header className="flex flex-row w-full">
            <Sheet>

                <SheetTrigger asChild>
                    <Button variant='secondary' size={'sm'} className="flex flex-row items-center justify-center gap-x-3">
                        <Settings size={16} />
                        Settings
                    </Button>
                </SheetTrigger>

                <SheetContent side={'left'} className="flex flex-col gap-6">
                    <SheetHeader>
                        <SheetTitle>Settings</SheetTitle>
                        <SheetDescription>
                            Configure your preferences here.
                        </SheetDescription>
                    </SheetHeader>
                    <ThemeToggle />
                </SheetContent>

            </Sheet>
        </header>
    )
}

export function Footer() {
    return(
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://x.com/rokitdotgg" target="_blank" rel="noopener noreferrer" >
                <Image aria-hidden src="https://nextjs.org/icons/globe.svg" alt="Globe icon" width={16} height={16} />
                Follow Me →
            </Link>
        </footer>
    )
}