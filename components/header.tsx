import Link from "next/link"
import { Button } from "./ui/button"

export const Header = () => {
    return(
        <header>
            <div className="container py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-semibold">
                    poddle
                </Link>
                <nav className="flex items-center gap-6">
                    <Button variant="ghost">
                        Sign in
                    </Button>
                    <Button>
                        Sign up
                    </Button>
                </nav>
            </div>
        </header>
    )
}