# @react-md/table

Create simple tables or complex data tables and grids using the provided
low-level components. You can also try using the `DataTable` renderer which will
extract some of the boilerplate out of the way for you.

Tables can also have optional fixed headers or footers using one of the
following methods:

- full page layout (using mixin/styles to position and two tables with
  `role="presentation"`)
- anywhere in the page using a `useFixedColumns` hook that will apply
  `transform(0, y)` when the parent component is scrolled.

## Installation

```sh
$ npm install --save @react-md/table
```

To get the most out of this package, it is also recommended to install:

```sh
$ npm install --save @react-md/utils \
    @react-md/states \
    @react-md/typography
```

<!-- DOCS_REMOVE -->

## Documentation

You should check out the
[full documentation](https://react-md.dev/packages/table) for live examples and
more customization information, but an example usage is shown below.

<!-- DOCS_REMOVE_END -->

<!-- INCLUDING_STYLES -->

## Usage

```tsx
import React from "react";
import { render } from "react-dom";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@react-md/table";

const App = () => (
  <TableContainer>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
          <TableCell>Header 3</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from(new Array(10), (_, i) => (
          <TableRow key={i}>
            <TableCell>{`Cell 1, row ${i + 1}`}</TableCell>
            <TableCell>{`Cell 2, row ${i + 1}`}</TableCell>
            <TableCell>{`Cell 3, row ${i + 1}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

render(<App />, document.getElementById("root"));
```