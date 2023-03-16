import {
  filterDuplicates,
  isPalindrom,
  replaceVowelsAndSpecialChars,
} from "./index";

describe("Alogirthm Challenge", () => {
  it("Algorithm I - Filter out falsy values", () => {
    const testValues = [
      1,
      "0",
      0,
      "2",
      3,
      undefined,
      "Bar",
      true,
      null,
      "false",
      false,
    ];
    const expectedValue = [1, "0", "2", 3, "Bar", true, "false"];
    expect(filterDuplicates(testValues)).toEqual(expectedValue);
  });

  describe("Algorithm II - Replace all vowels and special characters with their ASCII value  ", () => {
    [
      {
        testValue: "ParAdox",
        result: "P97r65d111x",
      },
      {
        testValue: "Under_ground!",
        result: "85nd101r95gr111117nd33",
      },
    ].forEach(({ testValue, result }) => {
      describe(`given a word ${JSON.stringify(testValue)}`, () => {
        it("should replace all vowels and special characters with ASCII values", () => {
          expect(replaceVowelsAndSpecialChars(testValue)).toEqual(result);
        });
      });
    });
  });

  describe("Algorithm III - Check if a palindrom", () => {
    [
      {
        testValue: "Kayak",
        result: true,
      },
      {
        testValue: "Airplane",
        result: false,
      },
      {
        testValue: "Rotator",
        result: true,
      },
      {
        testValue: "Loop",
        result: false,
      },
    ].forEach(({ testValue, result }) => {
      describe(`when checking ${JSON.stringify(
        testValue
      )} for being a palindrome`, () => {
        it(`should return ${result}`, () => {
          expect(isPalindrom(testValue)).toEqual(result);
        });
      });
    });
  });
});
