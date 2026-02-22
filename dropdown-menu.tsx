import * as React from "react"
import * as DropdownChurrasquim da Patroa BurgersPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownChurrasquim da Patroa Burgers({
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Root>) {
  return <DropdownChurrasquim da Patroa BurgersPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownChurrasquim da Patroa BurgersPortal({
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Portal>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownChurrasquim da Patroa BurgersTrigger({
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Trigger>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownChurrasquim da Patroa BurgersContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Content>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.Portal>
      <DropdownChurrasquim da Patroa BurgersPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownChurrasquim da Patroa BurgersPrimitive.Portal>
  )
}

function DropdownChurrasquim da Patroa BurgersGroup({
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Group>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownChurrasquim da Patroa BurgersItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function DropdownChurrasquim da Patroa BurgersCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.CheckboxItem>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownChurrasquim da Patroa BurgersPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownChurrasquim da Patroa BurgersPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownChurrasquim da Patroa BurgersPrimitive.CheckboxItem>
  )
}

function DropdownChurrasquim da Patroa BurgersRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.RadioGroup>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownChurrasquim da Patroa BurgersRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.RadioItem>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownChurrasquim da Patroa BurgersPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownChurrasquim da Patroa BurgersPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownChurrasquim da Patroa BurgersPrimitive.RadioItem>
  )
}

function DropdownChurrasquim da Patroa BurgersLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownChurrasquim da Patroa BurgersSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Separator>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function DropdownChurrasquim da Patroa BurgersShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownChurrasquim da Patroa BurgersSub({
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.Sub>) {
  return <DropdownChurrasquim da Patroa BurgersPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownChurrasquim da Patroa BurgersSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownChurrasquim da Patroa BurgersPrimitive.SubTrigger>
  )
}

function DropdownChurrasquim da Patroa BurgersSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownChurrasquim da Patroa BurgersPrimitive.SubContent>) {
  return (
    <DropdownChurrasquim da Patroa BurgersPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownChurrasquim da Patroa Burgers,
  DropdownChurrasquim da Patroa BurgersPortal,
  DropdownChurrasquim da Patroa BurgersTrigger,
  DropdownChurrasquim da Patroa BurgersContent,
  DropdownChurrasquim da Patroa BurgersGroup,
  DropdownChurrasquim da Patroa BurgersLabel,
  DropdownChurrasquim da Patroa BurgersItem,
  DropdownChurrasquim da Patroa BurgersCheckboxItem,
  DropdownChurrasquim da Patroa BurgersRadioGroup,
  DropdownChurrasquim da Patroa BurgersRadioItem,
  DropdownChurrasquim da Patroa BurgersSeparator,
  DropdownChurrasquim da Patroa BurgersShortcut,
  DropdownChurrasquim da Patroa BurgersSub,
  DropdownChurrasquim da Patroa BurgersSubTrigger,
  DropdownChurrasquim da Patroa BurgersSubContent,
}
