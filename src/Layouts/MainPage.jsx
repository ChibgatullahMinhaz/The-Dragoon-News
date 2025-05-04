import React, { useContext, useEffect } from "react";
import { LoaderContext } from "../Store/Context/Context";
import { Outlet, useLocation, useNavigation } from "react-router";
import Loading from "../Components/Loading/Loading";
import { Navbar } from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { RightSide } from "../Components/RightSide/RightSide";
import LatestNews from "../Components/LatestNews/LatestNews";
import LeftSide from "../Components/LeftSide/LeftSide";

const MainPage = () => {
  const { state } = useNavigation();
  const location = useLocation();
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [location, setIsLoading]);

  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="w-11/12 mx-auto my-3">
          <header>
            <Header></Header>
            <section>
              <LatestNews></LatestNews>
            </section>
            <nav className=" my-3">
              <Navbar></Navbar>
            </nav>
          </header>
          <main className="hidden md:block">
            <section className="  my-3  grid grid-cols-12 gap-5">
              <aside className="col-span-3 sticky top-0 h-fit">
                <LeftSide></LeftSide>
              </aside>
              <section className="main col-span-6">
                {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
              </section>
              <aside className="col-span-3 sticky top-0 h-fit">
                <RightSide></RightSide>
              </aside>
            </section>
          </main>
          {/* for small device  */}
          <main className="block md:hidden">
            <aside className="flex justify-between flex-wrap">
              <LeftSide></LeftSide>
            </aside>
            <section className="">
              <Outlet></Outlet>
            </section>
            <aside className="">
              <RightSide></RightSide>
            </aside>
          </main>
        </div>
      )}
    </>
  );
};

export default MainPage;
