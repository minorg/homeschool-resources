import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

function Header({ baseUrl }: { baseUrl: string }) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href={baseUrl} className="text-2xl font-bold tracking-tight">
          The Bookish Homeschooler
        </a>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <a href={baseUrl}>About</a>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <a href={`${baseUrl}/resources/adult`}>Resources for adults</a>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <a href={`${baseUrl}/resources/child`}>Resources for kids</a>
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
