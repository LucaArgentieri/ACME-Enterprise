import { Component, ComponentInterface, Host, h, State } from '@stencil/core';
import { News } from './news-interface';

/**
 * news component
 * @author Andrea Guffi
 * @version 1.0.0
 */
@Component({
  tag: 'acme-news',
  styleUrl: 'acme-news.scss',
  shadow: true,
})
export class AcmeNews implements ComponentInterface {
  @State() news: Array<News> = [];
  @State() limit = 3;
  @State() page = 1;

  /**
   * fecth 3 element when page is uploaded
   */
  componentDidLoad() {
    this.fetchData();
  }


  private fetchData = () => {
    if (this.limit >= 18) {
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
      .then(response => response.json())
      .then((json) => (this.news = json))
    this.limit += 3;
  };

  render() {
    return (
      <Host>
        <h2>News</h2>
        {this.news.map(news =>
          <div class='news-container'>
            <div class='post'>
              <div class='number'>{news.id}</div>
              <div class='post-info'>
                <h3 class='post-title'>{news.title}</h3>
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
