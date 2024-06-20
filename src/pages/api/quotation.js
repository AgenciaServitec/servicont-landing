export const POST = async ({request})=> {

    const data = await request.formData();
    const planType = data.get("planType");
    const fullName = data.get("fullName");
    const phoneNumber = data.get("phoneNumber");
    const businessLine = data.get("businessLine");
    const accountingAdvice = data.get("accountingAdvice");
    const spreadsheet = data.get("spreadsheet");
    const typeAccounting = data.get("typeAccounting");
    const monthlyPurchases = data.get("monthlyPurchases");
    const email= data.get("email");
    const ruc = data.get("ruc");
    const taxRegime= data.get("taxRegime");
    const monthlyBudget= data.get("monthlyBudget");
    const howManyWorkers = data.get("howManyWorkers");
    const monthlySales= data.get("monthlySales");

    const fields = {
        planType:"Planes",
        fullName: "Nombres",
        phoneNumber: "Teléfono",
        businessLine:"Giro del Negocio",
        accountingAdvice:"Asesoria contable",
        spreadsheet:"Tienes planilla",
        typeAccounting:"Tipo de contabilidad",
        monthlyPurchases:"Compras",
        email: "Email",
        ruc:"RUC",
        taxRegime:"Regimen tributario",
        monthlyBudget:"Presupuesto mensual",
        howManyWorkers:"Cantidad trabajadores",
        monthlySales:"Ventas mensuales",
    };

    if (!planType || !fullName || !phoneNumber|| !businessLine || !accountingAdvice || !spreadsheet || !typeAccounting|| !monthlyPurchases || !email || !ruc || !taxRegime || !monthlyBudget || !howManyWorkers  || !monthlySales ) {
        return new Response(
            JSON.stringify({
                ok: false,
                message: `Faltan los siguientes campos: ${fields["planType"]} ,${fields["fullName"]}, ${fields["phoneNumber"]}, ${fields["businessLine"]}, ${fields["accountingAdvice"]} , ${fields["spreadsheet"]}, ${fields["typeAccounting"]} , ${fields["monthlyPurchases"]} , ${fields["email"]}, ${fields["ruc"]} , ${fields["taxRegime"]}, ${fields["monthlyBudget"]}, ${fields["howManyWorkers"]}, ${fields["monthlySales"]} `,
            }),
            { status: 400 },
        );
    }

    const mapQuotation ={

        quotation:{
            planType,
            fullName,
            phone: {
                countryCode: "+51",
                number: phoneNumber,
            },
            businessLine,
            accountingAdvice,
            spreadsheet,
            typeAccounting,
            monthlyPurchases,
            email,
            ruc,
            taxRegime,
            monthlyBudget,
            howManyWorkers,
            monthlySales,
            hostname: "eces.pe",
        },
    };

    const response = await fetch(
        "https://api-servitecsales.web.app/emails/quotation",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(mapQuotation),
        },
    );

    return new Response(
        JSON.stringify({
            ok: true,
            message: "¡Cotizacion exitosa!",
        }),
        { status: 200 },
    );
}
