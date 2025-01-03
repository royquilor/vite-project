import "./App.css";

import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "./components/ui/breadcrumb";
import { NavActions } from "./components/nav-actions";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { TableDemo } from "./components/table-demo";
import {
  CirclePlus,
  SparklesIcon,
} from "lucide-react"

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Alert variant="banner">
            <AlertTitle>Staging —</AlertTitle>
            <AlertDescription>
              Changes you make here don’t affect your live environment
            </AlertDescription>
          </Alert>
          <header className="flex h-14 shrink-0 items-center gap-2 border-b">
            <div className="flex flex-1 items-center gap-2 pr-6 pl-4">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />

              <Breadcrumb>
                <BreadcrumbList>
                  {/* <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <a href="/">Home</a>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator /> */}
                  <BreadcrumbItem>
                    <BreadcrumbPage>Interactions</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="ml-auto px-4">
              <NavActions />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 xpx-4 xpy-4">
            <div className="mx-auto flex flex-row justify-between w-full xrounded-xl xbg-muted/50 pt-4 px-6">
              <div className="">
                <h1 className="text-lg font-medium">Interactions</h1>
                <p className="text-sm">
                  With great power, comes great responsibility
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Button variant="outline" size="sm">
                  <CirclePlus className="w-4 h-4" />
                  Add
                </Button>
                <Button variant="outline" size="sm">
                  <SparklesIcon className="w-4 h-4" />
                  Generate
                </Button>
              </div>
            </div>
            <div className="mx-auto h-full w-full">
              <TableDemo />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
