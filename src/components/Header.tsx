import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-tight">
          Homeschool Hub
        </a>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <a href="/">Home</a>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <a href="/resources/adult">For Parents</a>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <a href="/resources/child">For Kids</a>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <a href="mailto:homeschool-resources@minorgordon.net?subject=Homeschool resources">
                Contact
              </a>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}

export default Header;
