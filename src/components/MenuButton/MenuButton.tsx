import Link from "next/link";
import { Icon } from "@material-ui/core";

import ButtonBase from '@material-ui/core/ButtonBase';

import { Container } from '../../styles/components/MenuButton';

export default function ManuButton({ children, layout, path, name, icon }) {
  return (
    <ButtonBase>
      <Link href={layout + path}>
        <Container>
          <Icon className="Icon" fontSize="large">{icon}</Icon>
          <h2>{name}</h2>
        </Container>
      </Link>
    </ButtonBase>
  );
}