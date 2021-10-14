import { defaultLibs } from "../codegen/libs";
import { executeTransformer } from "./executors";

describe("executors", () => {
  describe("executeTransformer", () => {
    it("should", () => {
      const content = "some content";

      const code = `
        import {textExtractor} from 'gui'

        function transformer() {
          const element = document.createElement('div')

          element.textContent = '${content}'

          return textExtractor(element)
        }
      `;

      const rs = executeTransformer({
        code,
        args: [],
        libs: defaultLibs,
      });

      expect(rs).toBe(content);
    });
  });
});
