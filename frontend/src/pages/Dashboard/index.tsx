import BarChart from "componets/BarChart";
import DataTable from "componets/DataTable";
import Donutchart from "componets/DonutChart";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas vendas</h5>
                        <Donutchart />
                    </div>
                </div>

                <div>
                    <h2 className="text-primary">Todas vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
