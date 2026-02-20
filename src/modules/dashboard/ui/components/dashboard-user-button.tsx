"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { GeneratedAvatar } from "@/components/genrated-avater";
import { authClient } from "@/lib/auth-client";
import {
  ChevronDownIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export const DashboardUserButton = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { data, isPending } = authClient.useSession();

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/sign_in");
        },
      },
    });
  };

  if (isPending || !data?.user) return null;

  const UserInfo = (
    <>
      {data.user.image ? (
        <Avatar>
          <AvatarImage src={data.user.image} />
        </Avatar>
      ) : (
        <GeneratedAvatar
          seed={data.user.name ?? "User"}
          variant="initials"
          className="size-9"
        />
      )}

      <div className="flex flex-col text-left flex-1 min-w-0 ml-3">
        <p className="text-sm truncate">{data.user.name}</p>
        <p className="text-xs truncate text-muted-foreground">
          {data.user.email}
        </p>
      </div>

      <ChevronDownIcon className="size-4 shrink-0" />
    </>
  );

  // ================= MOBILE =================
  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <button className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 gap-x-2">
            {UserInfo}
          </button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{data.user.name}</DrawerTitle>
            <DrawerDescription>{data.user.email}</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter className="gap-2">
            <Button variant="outline">
              <CreditCardIcon className="size-4 mr-2" />
              Billing
            </Button>

            <Button variant="outline" onClick={onLogout}>
              <LogOutIcon className="size-4 mr-2" />
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  // ================= DESKTOP =================
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 gap-x-2">
          {UserInfo}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="right" className="w-72">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <span className="font-medium truncate">{data.user.name}</span>
            <span className="text-sm font-normal text-muted-foreground truncate">{data.user.email}</span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
            <DropdownMenuItem
          onClick={() =>{}}
          className="cursor-pointer flex items-center justify-between"
        >
          Billing
          <CreditCardIcon className="size-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onLogout}
          className="cursor-pointer flex items-center justify-between"
        ></DropdownMenuItem>

         <DropdownMenuItem
          onClick={onLogout}
          className="cursor-pointer flex items-center justify-between"
        >
          Logout
          <LogOutIcon className="size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
