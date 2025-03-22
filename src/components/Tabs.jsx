export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props;

    const tabs = ["All", "Open", "Completed"];
    return (
        <nav className="tab-container">
            {/*Map out all the different buttons in the screen */}
            {tabs.map((tab, tabIndex) => {
                // to find number of tasks
                let numOfTasks = 0;
                if (tab === "All") {
                    numOfTasks = todos.length;
                } else if (tab === "Open") {
                    numOfTasks = todos.filter((val) => !val.complete).length;
                } else {
                    numOfTasks = todos.filter((val) => val.complete).length;
                }

                return (
                    <button
                        onClick={() => {
                            setSelectedTab(tab);
                        }}
                        key={tabIndex}
                        className={
                            "tab-button " +
                            (tab === selectedTab ? " tab-selected" : "")
                        }
                    >
                        <h4>
                            {tab} <span>({numOfTasks})</span>
                        </h4>
                    </button>
                );
            })}
            <hr></hr>
        </nav>
    );
}
