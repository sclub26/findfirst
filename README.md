# findfirst

## Command Description

`findfirst` combines simplified versions of `grep` and `head`. It searches a text file for a word and prints up to a specified number of matching lines, in their original order.

Run it with Node.js:

```bash
node findfirst.js <filename> <word> <positive number>
```

For example, `node findfirst.js sample.txt apple 2` prints:

```text
apple
apple pie
```

The search is case-sensitive and matches text anywhere in a line. If nothing matches, the tool prints `No matches found.` A missing file produces a readable error, and a zero or invalid limit produces a usage message.

## AI-Assisted Programming

I asked AI what the Linux commands do, how I could combine `grep` and `head`, and which tests and edge cases I should try. AI explained how `filter()` can select matching lines and `slice()` can limit the output. AI also supplied the complete `findfirst.js` code that I used.

I chose the command idea for my project, created the files in Codio, ran five test cases, and checked the actual output against the expected output. The tests covered two matches, no matches, a limit larger than the match count, a missing file, and a zero limit. All five gave the expected results, so I made no changes after testing.

AI's initial version did not include case-insensitive searching, so `Apple` and `apple` count as different text. I kept that simple behavior for this assignment. I also recognize that asking AI for complete code went beyond the activity's suggested AI use, so I am disclosing that here.
