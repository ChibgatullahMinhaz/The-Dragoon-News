import React from "react";
import Header from "../Components/Header/Header";
import { Navbar } from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto my-3" >
          <header>
            <Header></Header>
            <section >
              {/* <LatestNews></LatestNews> */}
              <div>latest news</div>
            </section>
            <nav className=" my-3">
              <Navbar></Navbar>
            </nav>
          </header>
          <main className="my-3  grid grid-cols-12 gap-5">
            <aside className="col-span-3">
              <div>
                left
              </div>
            </aside>
            <section className="main col-span-6">
              <Outlet></Outlet>
            </section>
            <aside className="col-span-3">
            <div>
                right
            </div>
            </aside>
          </main>
        </div>
    )
};

export default MainLayout;
