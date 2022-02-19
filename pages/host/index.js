import AgendaItem from "components/_Dashboard/AgendaItem";
import Agendas from "components/_Dashboard/Agendas";
import Layout from "components/Layout/Protected";
import Profile from "components/_Dashboard/Profile";
import Transaction from "components/_Dashboard/Transaction";

export default function Dashboard() {
  return (
    <div>
      <Layout>
        <AgendaItem highlight />
        <div className="f">
          <Profile />
          <Transaction />
        </div>
        <Agendas title={`Today's agenda`} />
        <Agendas title="Incoming agenda" viewAll="/host/agenda" />
      </Layout>
    </div>
  );
}
