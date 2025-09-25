"use client";

import React, { useState } from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Activity, File, Newspaper, Users2 } from "lucide-react";
import AdminDocuments from "@/components/AdminComponents/admin-documents";
import AdminNews from "@/components/AdminComponents/admin-news";
import AdminUsers from "@/components/AdminComponents/admin-users";
import AdminLogs from "@/components/AdminComponents/admin-logs";

const adminItems = [
    { title: "Новости", key: "news", icon: Newspaper },
    { title: "Документы", key: "documents", icon: File },
    { title: "Пользователи", key: "users", icon: Users2 },
    { title: "Журнал событий", key: "activity", icon: Activity },
];

function AdminPanelContent() {
    const [activeView, setActiveView] = useState("news");

    const renderContent = () => {
        switch (activeView) {
            case "news": return <AdminNews />;
            case "documents": return <AdminDocuments />;
            case "users": return <AdminUsers />;
            case "activity": return <AdminLogs />;
            default: return <AdminNews />;
        }
    };

    return (
        <SidebarProvider>
            <div className="flex h-full w-full">
                {/* Сайдбар */}
                <Sidebar className="w-72 border-r flex flex-col shrink-0 h-full">
                    <SidebarContent className="flex-1 overflow-auto">
                        <SidebarGroup>
                            <SidebarGroupLabel>Панель управления</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {adminItems.map(item => (
                                        <SidebarMenuItem key={item.key}>
                                            <SidebarMenuButton
                                                onClick={() => setActiveView(item.key)}
                                                className={activeView === item.key ? "bg-muted text-foreground" : ""}
                                            >
                                                <item.icon className="h-4 w-4" />
                                                <span>{item.title}</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter className="border-t p-4 text-center text-sm text-muted-foreground shrink-0">
                        Панель управления v1.0
                    </SidebarFooter>
                </Sidebar>

                {/* Правая панель с контентом */}
                <div className="flex-1 pt-3 py-3 px-6 flex flex-col min-w-0 h-full">
                    <DialogHeader className="px-6 pb-3 border-b shrink-0">
                        <DialogTitle className="text-xl font-semibold">
                            {adminItems.find(item => item.key === activeView)?.title}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="flex-1 min-h-0 overflow-auto">
                        <div className="p-6">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}

export default function AdminPanel() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Панель управления</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-7xl h-[75vh] p-0 flex flex-col overflow-hidden">
                    <AdminPanelContent />
                </DialogContent>
            </Dialog>
        </>
    );
}