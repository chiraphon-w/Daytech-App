import { useState } from "react";

export default function WidgetsCard({ title, text, children, test1, test2 }) {
    const [searchText, setSearchText] = useState("");

    function testforTest1() {
        test1()
    }
    function targett() {
        test2()
    }
  return (
    <div>
      <h2 className="text-xl mb-2">{title}</h2>
      <form className="flex">
        <div className="flex-1 mr-1">
          <input
            type="text"
            value={testforTest1}
            onChange={targett}
            className="w-full px-2.5 py-1 focus:outline-none rounded-md"
            placeholder={text}
          />
        </div>
        {children}
      </form>
    </div>
  );
}


