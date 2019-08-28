import { TestBed, async } from '@angular/core/testing';

import { FeedProviderService } from './feed.provider.service';
import { HttpClientModule } from '@angular/common/http';

describe('Feed.ProviderService', () => {
  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  })));

  it('should be created', () => {
    const service: FeedProviderService = TestBed.get(FeedProviderService);
    expect(service).toBeTruthy();
  });
});
