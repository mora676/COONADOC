function DashboardLayout({ children }) {
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-3 bg-light p-3">Sidebar aquí</aside>
          <main className="col-md-9 p-4">
            {children}
          </main>
        </div>
      </div>
    );
  }
  
  export default DashboardLayout;
  