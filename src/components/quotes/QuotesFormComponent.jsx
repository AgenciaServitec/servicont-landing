import { useState } from "react";
import "./QuotesFormComponent.css"

const QuotesFormComponent = () => {
    const [quotesLoading, setQuotesLoading] = useState(false);
    const [quotesResponseMessage, setQuotesResponseMessage] = useState("");
    console.log("quotesResponseMessage", quotesResponseMessage);
    async function submit(e) {
        try {
            e.preventDefault();
            setQuotesLoading(true);

            const formData = new FormData(e.target);

            const response = await fetch("/api/quotation", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!data.ok) {
                setQuotesResponseMessage(data.message);
                return;
            }

            window.location.href = "/success";

            setQuotesLoading(false);
        } catch (e) {
            console.error(e);
        } finally {
            setQuotesLoading(false);
        }
    }
    return (
        <form onSubmit={submit} noValidate className="form-container-quotes">
            <div id="contact-form">
                <div className="item-wrapper">
                    <label htmlFor="plans">Planes</label>
                    <select id="plans" name="planType">
                        <option value="Plan Emprendedor">Plan Emprendedor</option>
                        <option value="Plan Pyme">Plan Pyme</option>
                        <option value="Plan Corporativo">Plan Corporativo</option>
                    </select>

                </div>
                <div className="item-wrapper">
                    <label htmlFor="fullName">Nombres y apellidos</label>
                    <input id="fullName" placeholder="Nombres y apellidos" name="fullName"/>
                </div>

                <div className="item-wrapper">
                    <label htmlFor="phoneNumber">Teléfono</label>
                    <input
                        type="number"
                        id="phoneNumber"
                        placeholder="Telefono"
                        name="phoneNumber"
                    />
                </div>

                <div className="item-wrapper">
                    <label htmlFor="businessline">Giro del Negocio</label>
                    <input id="businessline" placeholder="Giro del Negocio" name="businessLine"/>
                </div>

                <div className="item-wrapper">
                    <label htmlFor="accountingadvice">¿Cuenta con asesoria contable?</label>
                    <select id="accountingadvice" name="accountingAdvice">
                        <option value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="item-wrapper">
                    <label htmlFor="template">¿Tienes planilla?</label>
                    <select id="template" name="spreadsheet">
                        <option value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="item-wrapper">
                    <label htmlFor="accountingtype">Tipo de contabilidad</label>
                    <select id="accountingtype" name="typeAccounting">
                        <option value="Manual">Manual</option>
                        <option value="Computarizada">Computarizada</option>
                    </select>
                </div>

                <div className="item-wrapper">
                    <label htmlFor="shopping">Compras</label>
                    <input type="number" id="shopping" placeholder="Compras" name="monthlyPurchases"/>
                </div>
                <div className="item-wrapper">
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder="Email" name="email"/>
                </div>

                <div className="item-wrapper">
                    <label htmlFor="ruc">RUC</label>
                    <input
                        type="number"
                        id="ruc"
                        placeholder="R.U.C"
                        name="ruc"
                    />
                </div>
                <div className="item-wrapper">
                    <label htmlFor="taxregime">Regimen triburario</label>
                    <input
                        id="taxregime"
                        placeholder="Regimen tributario"
                        name="taxRegime"
                    />
                </div>
                <div className="item-wrapper">
                    <label htmlFor="monthlybudget">Presupuesto mensual</label>
                    <input
                        type="number"
                        id="monthlybudget"
                        placeholder="Presupuesto mensual"
                        name="monthlyBudget"
                    />
                </div>

                <div className="item-wrapper">
                    <label htmlFor="workers">¿Cuantos trabajadores?</label>
                    <input
                        type="number"
                        id="workers"
                        placeholder="¿Cuantos trabajadores?"
                        name="howManyWorkers"
                    />
                </div>

                <div className="item-wrapper">
                    <label htmlFor="monthlysales">Ventas</label>
                    <input
                        type="number"
                        id="monthlysales"
                        placeholder="Ventas mensual"
                        name="monthlySales"
                    />
                </div>
                <button
                    className={quotesLoading ? "disabled" : ""}
                    disabled={quotesLoading}
                    style={{
                        minWidth: "300px",
                        padding: "1em",
                        border: "none",
                        pointerEvents: `${quotesLoading ? "none" : ""}`,
                        background: `${quotesLoading ? "gray" : ""}`,
                    }}
                >
                    Enviar
                </button>
            </div>
            {quotesResponseMessage && <p style={{color: "red", padding: "0.5em"}}>{quotesResponseMessage}</p>}

        </form>
    );

};

export default QuotesFormComponent;