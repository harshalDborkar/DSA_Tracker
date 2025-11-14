import React from "react";
import leetcodeLogo from "../../public/leetcode.svg";
import geeksforgeeksLogo from "../../public/geeksforgeeks.svg";
const QuestionRow = () => {
  return (
    <>
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-8 w-auto">
                <img
                  src={geeksforgeeksLogo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span className="badge badge-ghost badge-sm">
            Community Outreach Specialist
          </span>
        </td>
      </tr>
    </>
  );
};

export default QuestionRow;
