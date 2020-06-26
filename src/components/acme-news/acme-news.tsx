import { Component, ComponentInterface, Host, h, State } from '@stencil/core';
import { News } from './news-interface';

@Component({
  tag: 'acme-news',
  styleUrl: 'acme-news.scss',
  shadow: true,
})
export class AcmeNews implements ComponentInterface {
  @State() news: Array<News> = [];
  @State() limit = 3;
  @State() page = 1;

  componentDidLoad() {
    this.fetchData();
  }

  private fetchData = () => {
    if (this.limit >= 15) {
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
      .then(response => response.json())
      .then((json) => (this.news = json))
    this.limit += 3;
    //this.page++;
  };

  render() {
    return (
      <Host>
        {this.news.map(news =>
          <div>
            <div class='post'>
              <div class='number'>{news.id}</div>
              <div class='post-info'>
                <h2 class='post-title'>{news.title}</h2>
                <p class='post-body'>{news.body}</p>
              </div>
            </div>
          </div>
        )}
        <button class='fetch-button' onClick={this.fetchData}>Mostra altri</button>
      </Host>
    );
  }

}
