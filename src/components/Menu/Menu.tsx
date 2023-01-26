import Link from 'next/link';
import * as S from './styles';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const menuList = [
    { href: '/', name: 'About' },
    { href: '/experiences', name: 'Experiences' },
    { href: '/projects', name: 'Projects' }
  ];

  return (
    <>
      <S.Container>
        <div>
          <S.Name>João Victor Mendes Ávila</S.Name>
          <S.Occupation>Software Engineer / Mid-Level</S.Occupation>
        </div>

        <div>
          {menuList.map(({ href, name }) => (
            <Link
              className={currentRoute === href ? 'active' : ''}
              key={href}
              href={href}
            >
              {name}
            </Link>
          ))}
        </div>
      </S.Container>
    </>
  );
}
