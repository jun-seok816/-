<div align="center">
  <h1>📅만년달력 만들기📆</h1>
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjun-seok816%2F-perennial-calendar&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>


<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/72478198/148873910-9123bbc0-c462-4170-8f10-c59ba25dab2b.gif" alt="animated" />
</p>


0년부터 9999년까지의 달력만들기

본 프로젝트는 Javascript의 [__Date생성자__] 를 사용하지 않고 [__나만의 js_Date클래스__]를 사용하여 만들어졌습니다.


<div align="center">
  <h1>Front-end Stack</h1>
  <img src="https://img.shields.io/badge/React-3D41C8?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-EEEF16?style=flat-square&logo=JavaScript&logoColor=white"/>
</div>


### Javascript

프로젝트에 필요한 메소드를 담고있는 클래스를 활용하였습니다
클래스에 대한 정확한 정보는 [__나만의 js_Date클래스__]에 정리해두었습니다.



### React

[__CreateReactApp__]프로그램을 사용하여 빌드 구성 없이 기본적인 React 앱을 만든 후 그 위에다 달력 프로젝트를 구현하였습니다.
달력프로그램을 설치하기 위해서는 이 커맨드를 당신의 터미널에서 실행시켜주세요:

```sh
npm install -g create-react-app
```


<div align ="center">
  <h1>Directory structure</h1>
</div>

### public폴더
- index.html `메인페이지`

<details>
<summary>Linux</summary>

To install zoxide, run this command in your terminal:

```sh
curl -sS https://webinstall.dev/zoxide | bash
```

Alternatively, you can use a package manager:

| Distribution       | Repository              | Instructions                                                                                   |
| ------------------ | ----------------------- | ---------------------------------------------------------------------------------------------- |
| ***Any***          | **[crates.io]**         | `cargo install zoxide --locked`                                                                |
| *Any*              | [conda-forge]           | `conda install -c conda-forge zoxide`                                                          |
| *Any*              | [Linuxbrew]             | `brew install zoxide`                                                                          |
| Alpine Linux 3.13+ | [Alpine Linux Packages] | `apk add zoxide`                                                                               |
| Arch Linux         | [Arch Linux Community]  | `pacman -S zoxide`                                                                             |
| CentOS 7+          | [Copr]                  | `dnf copr enable atim/zoxide` <br /> `dnf install zoxide`                                      |
| Debian 11+         | [Debian Packages]       | `apt install zoxide`                                                                           |
| Devuan 4.0+        | [Devuan Packages]       | `apt install zoxide`                                                                           |
| Fedora 32+         | [Fedora Packages]       | `dnf install zoxide`                                                                           |
| Gentoo             | [GURU Overlay]          | `eselect repository enable guru` <br /> `emerge --sync guru` <br /> `emerge app-shells/zoxide` |
| Manjaro            |                         | `pacman -S zoxide`                                                                             |
| NixOS              | [nixpkgs]               | `nix-env -iA nixpkgs.zoxide`                                                                   |
| Parrot OS          |                         | `apt install zoxide`                                                                           |
| Raspbian 11+       | [Raspbian Packages]     | `apt install zoxide`                                                                           |
| Ubuntu 21.04+      | [Ubuntu Packages]       | `apt install zoxide`                                                                           |
| Void Linux         | [Void Linux Packages]   | `xbps-install -S zoxide`                                                                       |

</details>

### src폴더

#### component폴더
- Thead.js `달력 table의 thead부분의 컴포넌트, 년도와 월을 input태그로 받아옵니다`
- Tbody.js `달력 table의 tbody부분의 컴포넌트, js_Date.js안에 있는 메소드를 활용하여 해당 년월의 달력을 출력합니다`

#### css폴더
- App.module.css `App컴포넌트의 css`
- Tbody.module.css `Tbody컴포넌트의 css`
- Thead.module.css `Thead컴포넌트의 css` 

#### javascript폴더
- js_Date.js `만년달력 프로젝트에 필요한 메소드를 담고있는 클래스입니다`


[__Date생성자__]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
[__나만의 js_Date클래스__]: https://github.com/jun-seok816/my_-js_Date-Class 
[__CreateReactApp__]:https://github.com/facebook/create-react-app

