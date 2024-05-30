import { useVisibleDrawer } from "../hooks/index.js";

const Drawer = ({ children }) => {
    const { visibleDrawer, showDrawer, hiddenDrawer } = useVisibleDrawer();

    return (
        <>
            <button
                style={{ border: "none", background: "none" }}
                onClick={showDrawer}
            >
                {children}
            </button>

            <section
                style={{
                    position: "fixed",
                    zIndex: "300",
                    width: "100vw",
                    height: "100vh",
                    top: "0",
                    right: "0",
                    transition: "all 0.3s ease-in-out ",
                    transform: visibleDrawer ? " translateX(0%)" : " translateX(100%)",
                    display: "grid",
                    gridTemplateColumns: "25% 1fr",
                }}
            >
                <div onClick={hiddenDrawer} style={{
                    background: "rgba(13,119,193, .2)"
                }}></div>
                <article
                    style={{ position: "relative", background: "rgb(13,119,193)", padding: "2em 1em" }}
                >
                    <span style={{position: "absolute", top: "1em", right: "1em", color:"white"}} onClick={hiddenDrawer}>X</span>
                    <ul style={{ listStyle: "none" }}>
                        <ItemLi text="Inicio" onHiddenDrawer={hiddenDrawer} />
                        <ItemLi
                            text="Servicio"
                            path="/service"
                            onHiddenDrawer={hiddenDrawer}
                        />
                        <ItemLi
                            text="Nosotros"
                            path="/about-us"
                            onHiddenDrawer={hiddenDrawer}
                        />
                        <ItemLi
                            text="Planes"
                            path="/plans"
                            onHiddenDrawer={hiddenDrawer}
                        />

                        <ItemLi
                            text="Contacto"
                            path="/contact"
                            onHiddenDrawer={hiddenDrawer}
                        />
                    </ul>
                </article>
            </section>
        </>
    );
};

export default Drawer;

const ItemLi = ({ text, path = "/", onHiddenDrawer }) => (
    <li
        style={{ padding: "0.3em 0", fontSize: "1.5em" }}
        onClick={onHiddenDrawer}
    >
        <a
            href={path}
            style={{
                textDecoration: "none",
                color: "white",
            }}
        >
            {text}
        </a>
    </li>
);
