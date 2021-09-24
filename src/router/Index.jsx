// 路由组件
// 要求：组件的首字母大写
// import react member
// Suspense：组件名，用于包裹所有懒加载路由，其有一个属性fallback值是一个组件的使用形式，表示在加载的时候给予用户的提示
// lazy：方法名，实现对组件的懒加载
import React, { Suspense, lazy } from "react";
// import router component
//重定向：redirect
import { Route, Switch, Redirect } from "react-router-dom";

// import view components
import Loading from "@/components/Loading";
const Login = lazy(() => import("@/views/login/Index"));
const Admin = lazy(() => import("@/views/admin/Admin"));

const Index = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                {/* 登录的路由 */}
                <Route path="/login" component={Login} />
                {/* 展示后台布局组件 */}
                <Route path="/admin" component={Admin} />
                {/* 对路由重定向，“/” */}
                <Redirect from="/" to="/login" exact />
                {/* ... */}
            </Switch>
        </Suspense>
    );
};

export default Index;
