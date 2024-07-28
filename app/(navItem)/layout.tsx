import NavBar from "@/components/Navbar/Navbar";

export default function NavLayout({children} : {children : React.ReactNode}){
    return(
        <>
            <NavBar />
            {children}
        </>
    )
}