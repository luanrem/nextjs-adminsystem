import { useCallback, useEffect } from "react";
import Link from "next/link";
import { Container } from '../../styles/components/Sidebar';

import MenuButton from '../MenuButton/MenuButton';

import routes from '../../routes/routes';
import { List } from "@material-ui/core";

export default function Sidebar() {


  return (
    <Container>
      {
        routes.map((prop, key) => {
          return (
            <MenuButton
              key={key}
              layout={prop.layout}
              path={prop.path}
              name={prop.name}
              icon={prop.icon}
            >
            </MenuButton>
          );
        })
      }
    </Container>
  );
}