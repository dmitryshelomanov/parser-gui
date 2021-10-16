import Inspector from "react-inspector";
import { useStore, useStoreMap } from "effector-react";
import { Select } from "evergreen-ui";

export function ChildTypesSelect() {
  return (
    <Select width={140}>
      <option value="kv" selected>
        As key valye
      </option>
      <option value="list">As list</option>
    </Select>
  );
}
