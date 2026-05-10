import "./App.css";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import NavBar from "./Components/NavBar/NavBar";
import RatingBar from "./Components/RatingBar/RatingBar";
// import Digital_Tools from './Components/Premium-Digital-Tools/Digital_Tools'
import ProductItems from "./Components/ProductItems/ProductItems";
import Cart from "./Components/Carts/Cart";
import { Suspense } from "react";
import Accounts from "./Components/Accounts/Accounts";
import WorkFlow from "./Components/WorkFlow/WorkFlow";
import Footer from "./Components/Footer/Footer";
import PreFooter from "./Components/PreFooter/PreFooter";
import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState(() => {
    try {
      return localStorage.getItem("view") || "Products";
    } catch (e) {
      return "Products";
    }
  });
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("view", view);
    } catch (e) {}
  }, [view]);

  const fetchData = async () => {
    try {
      const res = await fetch("SystemData.json");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.error("Error fetching SystemData.json:", error);
      throw error;
    }
  };
  const productPromise = fetchData();
  return (
    <>
      <header className="container mx-auto max-w-400 px-50">
        {" "}
        <NavBar setView={setView} cart={cart} /> <HeroBanner />
      </header>
      <RatingBar />
      <main className="container mx-auto max-w-400 px-50">
        {/* <Digital_Tools/> */}
        <Suspense
          fallback={
            <div className="">
              <span className="loading loading-infinity loading-lg"></span>
            </div>
          }
        >
          {view === "Cart" ? (
            <Cart
              cart={cart}
              removeFromCart={(id) =>
                setCart((prev) => prev.filter((p) => p.id !== id))
              }
              setView={setView}
              view={view}
            />
          ) : (
            <ProductItems
              productPromise={productPromise}
              setView={setView}
              view={view}
              cart={cart}
              addToCart={(product) => {
                setCart((prev) => {
                  const exists = prev.find((p) => p.id === product.id);
                  if (exists) {
                    return prev.map((p) =>
                      p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p,
                    );
                  }
                  return [...prev, { ...product, qty: 1 }];
                });
              }}
            />
          )}
        </Suspense>
        {view === "Products" && (
          <>
            <Accounts />
            <PreFooter />
            <WorkFlow />
          </>
        )}
      </main>

      {view === "Products" && (
        <footer className=" container mx-auto max-w-400 px-50">
          <Footer />
        </footer>
      )}
    </>
  );
}

export default App;
