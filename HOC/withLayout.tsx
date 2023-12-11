import React, { Component, FunctionComponent } from "react";
import { Layout } from "@/layout/Layout";

export const WithLayout = <T extends Record<string, unknown>>(Component: FunctionComponent) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};