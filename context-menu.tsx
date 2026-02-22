"use client"

import * as React from "react"
import * as ContextChurrasquim da Patroa BurgersPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextChurrasquim da Patroa Burgers({
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Root>) {
  return <ContextChurrasquim da Patroa BurgersPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextChurrasquim da Patroa BurgersTrigger({
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Trigger>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextChurrasquim da Patroa BurgersGroup({
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Group>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextChurrasquim da Patroa BurgersPortal({
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Portal>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextChurrasquim da Patroa BurgersSub({
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Sub>) {
  return <ContextChurrasquim da Patroa BurgersPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextChurrasquim da Patroa BurgersRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.RadioGroup>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextChurrasquim da Patroa BurgersSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextChurrasquim da Patroa BurgersPrimitive.SubTrigger>
  )
}

function ContextChurrasquim da Patroa BurgersSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.SubContent>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function ContextChurrasquim da Patroa BurgersContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Content>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.Portal>
      <ContextChurrasquim da Patroa BurgersPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </ContextChurrasquim da Patroa BurgersPrimitive.Portal>
  )
}

function ContextChurrasquim da Patroa BurgersItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.Item
      data-slot="context-menu-item"
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

function ContextChurrasquim da Patroa BurgersCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.CheckboxItem>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextChurrasquim da Patroa BurgersPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextChurrasquim da Patroa BurgersPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextChurrasquim da Patroa BurgersPrimitive.CheckboxItem>
  )
}

function ContextChurrasquim da Patroa BurgersRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.RadioItem>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextChurrasquim da Patroa BurgersPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextChurrasquim da Patroa BurgersPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextChurrasquim da Patroa BurgersPrimitive.RadioItem>
  )
}

function ContextChurrasquim da Patroa BurgersLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function ContextChurrasquim da Patroa BurgersSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextChurrasquim da Patroa BurgersPrimitive.Separator>) {
  return (
    <ContextChurrasquim da Patroa BurgersPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function ContextChurrasquim da Patroa BurgersShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextChurrasquim da Patroa Burgers,
  ContextChurrasquim da Patroa BurgersTrigger,
  ContextChurrasquim da Patroa BurgersContent,
  ContextChurrasquim da Patroa BurgersItem,
  ContextChurrasquim da Patroa BurgersCheckboxItem,
  ContextChurrasquim da Patroa BurgersRadioItem,
  ContextChurrasquim da Patroa BurgersLabel,
  ContextChurrasquim da Patroa BurgersSeparator,
  ContextChurrasquim da Patroa BurgersShortcut,
  ContextChurrasquim da Patroa BurgersGroup,
  ContextChurrasquim da Patroa BurgersPortal,
  ContextChurrasquim da Patroa BurgersSub,
  ContextChurrasquim da Patroa BurgersSubContent,
  ContextChurrasquim da Patroa BurgersSubTrigger,
  ContextChurrasquim da Patroa BurgersRadioGroup,
}
