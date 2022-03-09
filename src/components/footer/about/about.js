class AboutCategory{
  constructor(title,type,desc=undefined,tags) {
    this.title = title;
    this.type = type;
    this.desc = desc;
    this.tags = tags;
  }
}
const about = [
  new AboutCategory('О магазине','desc','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.'),
  new AboutCategory('Категории','tags','',[{name:'часы', link:'#'},{name: 'браслеты', link: '#'},{name: 'ремни', link:'#'},{name: 'ювелирные изделия', link:'#'},{name:'запонки', link:'#'}]),
  new AboutCategory('Рассылка','email','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.')
]
export default about;