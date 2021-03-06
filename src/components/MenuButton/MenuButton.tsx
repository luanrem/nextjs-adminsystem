import Link from "next/link";
import { Icon } from "@material-ui/core";

import ButtonBase from '@material-ui/core/ButtonBase';

import { Container } from '../../styles/components/MenuButton';

export default function ManuButton({ layout, path, name, icon }) {
  return (
    <Link href={layout + path}>
      <ButtonBase>
        <Container>
          <Icon className="Icon">{icon}</Icon>
          <h2>{name}</h2>
        </Container>
      </ButtonBase>
    </Link>
  );
}