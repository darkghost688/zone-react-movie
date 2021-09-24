import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// 导入组件
import Loading from "@/components/Loading";
//展示dashboard
const Dashboard = lazy(() => import("@/views/admin/home/Dashboard"));
const Userlist = lazy(() => import("@/views/admin/user/List"));
const Filmlist = lazy(() => import("@/views/admin/film/Filmlist"));
const Location = lazy(() => import("../views/admin/cinema/Location"));
// const Location = lazy(() => import("@/views/admin/cinema/Location"));
// ...

const AdminRouter = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route path="/admin/user/list" component={Userlist} />
                <Route path="/admin/film/FilmList" component={Filmlist} />
                <Route path="/admin/cinema/Location" component={Location} />
                {/* 当访问父组件，重定向到欢迎页 */}
                <Redirect exact from="/admin" to="/admin/dashboard"/>
            </Switch>
        </Suspense>
    );
};

export default AdminRouter;
