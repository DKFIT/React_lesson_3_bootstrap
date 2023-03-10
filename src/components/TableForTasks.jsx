import { Table, Navbar, Container} from "react-bootstrap";

const TableForTasks = (props) => {
  console.log(props.list, "vaikinis komponentas");
  return (
  <div>
  <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">To do List</Navbar.Brand>
        </Container>
      </Navbar>
    <Table className="mt-5 container border border-dark">
      <thead>
        <tr>
          <th className="text-center">Eil. Nr</th>
          <th className="text-center">Uzduotis</th>
          <th className="text-center">Ar uzbaigta</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((task, index) => (
          <tr key={index}>
            <td className="text-center border border-dark">{index + 1}</td>
            <td className="text-center border border-dark" >{task.text}</td>
            <td className="text-center border border-dark">{task.isCompleted ? "Done" : "Still in progress.."}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default TableForTasks;
