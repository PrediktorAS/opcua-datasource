import { DataQuery, DataSourceJsonData } from '@grafana/ui';

export interface MyQuery extends DataQuery {
  queryText?: string;
  constant: number;
  call: string;
}

export const defaultQuery: Partial<MyQuery> = {
  constant: 6.5,
};

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  url: string;
  call: string;
}
