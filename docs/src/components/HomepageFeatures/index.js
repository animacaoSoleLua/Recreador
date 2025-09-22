import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Preparação e Chegada',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Este guia detalhado oferece todas as informações necessárias para você se preparar para o evento. 
      Desde o horário de chegada ao escritório, a importância de verificar a agenda e a necessidade de auxiliar o animador.
      </>
    ),
  },
  {
    title: 'Durante a Festa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Saiba como agir ao chegar no evento, desde se apresentar ao cliente até a montagem do equipamento. Aprenda sobre a interação com as crianças, o papel da música durante a pintura e balões e como ser um recreador animado e atencioso.
      </>
    ),
  },
  {
    title: 'Pós-Evento',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      O trabalho não termina quando a festa acaba. Este tópico aborda o processo de retorno ao escritório, a importância do checklist, a organização dos materiais e o envio de fotos para o animador.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
