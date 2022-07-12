export interface HomePage{
  data:{
    id: number;
    attributes: {
      Name: string;
      Email: string;
      CellPhone: string;
      Website: string;
      BioSummary: string;
      FullBio: string;
      LinkedIn: string;
      Github: string;
      Behance: any;
      Logo: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
                width: number;
                height: number;
              }
            }
          }
        }
      },
      WebsiteHeroImage: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          }
        }
      }
    }
  }
}
