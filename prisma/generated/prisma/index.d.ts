
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Documents
 * 
 */
export type Documents = $Result.DefaultSelection<Prisma.$DocumentsPayload>
/**
 * Model DocumentsTypes
 * 
 */
export type DocumentsTypes = $Result.DefaultSelection<Prisma.$DocumentsTypesPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model NewsTypes
 * 
 */
export type NewsTypes = $Result.DefaultSelection<Prisma.$NewsTypesPayload>
/**
 * Model RolesTypes
 * 
 */
export type RolesTypes = $Result.DefaultSelection<Prisma.$RolesTypesPayload>
/**
 * Model StatusesTypes
 * 
 */
export type StatusesTypes = $Result.DefaultSelection<Prisma.$StatusesTypesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Logs
 * const logs = await prisma.log.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Logs
   * const logs = await prisma.log.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **Documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.DocumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentsTypes`: Exposes CRUD operations for the **DocumentsTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentsTypes
    * const documentsTypes = await prisma.documentsTypes.findMany()
    * ```
    */
  get documentsTypes(): Prisma.DocumentsTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsTypes`: Exposes CRUD operations for the **NewsTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsTypes
    * const newsTypes = await prisma.newsTypes.findMany()
    * ```
    */
  get newsTypes(): Prisma.NewsTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolesTypes`: Exposes CRUD operations for the **RolesTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolesTypes
    * const rolesTypes = await prisma.rolesTypes.findMany()
    * ```
    */
  get rolesTypes(): Prisma.RolesTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusesTypes`: Exposes CRUD operations for the **StatusesTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusesTypes
    * const statusesTypes = await prisma.statusesTypes.findMany()
    * ```
    */
  get statusesTypes(): Prisma.StatusesTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Log: 'Log',
    Documents: 'Documents',
    DocumentsTypes: 'DocumentsTypes',
    News: 'News',
    NewsTypes: 'NewsTypes',
    RolesTypes: 'RolesTypes',
    StatusesTypes: 'StatusesTypes',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "log" | "documents" | "documentsTypes" | "news" | "newsTypes" | "rolesTypes" | "statusesTypes" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Documents: {
        payload: Prisma.$DocumentsPayload<ExtArgs>
        fields: Prisma.DocumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findFirst: {
            args: Prisma.DocumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findMany: {
            args: Prisma.DocumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          create: {
            args: Prisma.DocumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          createMany: {
            args: Prisma.DocumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          delete: {
            args: Prisma.DocumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          update: {
            args: Prisma.DocumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          deleteMany: {
            args: Prisma.DocumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          upsert: {
            args: Prisma.DocumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.DocumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      DocumentsTypes: {
        payload: Prisma.$DocumentsTypesPayload<ExtArgs>
        fields: Prisma.DocumentsTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentsTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentsTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>
          }
          findFirst: {
            args: Prisma.DocumentsTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentsTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>
          }
          findMany: {
            args: Prisma.DocumentsTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>[]
          }
          create: {
            args: Prisma.DocumentsTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>
          }
          createMany: {
            args: Prisma.DocumentsTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentsTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>[]
          }
          delete: {
            args: Prisma.DocumentsTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>
          }
          update: {
            args: Prisma.DocumentsTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>
          }
          deleteMany: {
            args: Prisma.DocumentsTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentsTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentsTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>[]
          }
          upsert: {
            args: Prisma.DocumentsTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsTypesPayload>
          }
          aggregate: {
            args: Prisma.DocumentsTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentsTypes>
          }
          groupBy: {
            args: Prisma.DocumentsTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentsTypesCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsTypesCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      NewsTypes: {
        payload: Prisma.$NewsTypesPayload<ExtArgs>
        fields: Prisma.NewsTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>
          }
          findFirst: {
            args: Prisma.NewsTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>
          }
          findMany: {
            args: Prisma.NewsTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>[]
          }
          create: {
            args: Prisma.NewsTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>
          }
          createMany: {
            args: Prisma.NewsTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>[]
          }
          delete: {
            args: Prisma.NewsTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>
          }
          update: {
            args: Prisma.NewsTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>
          }
          deleteMany: {
            args: Prisma.NewsTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>[]
          }
          upsert: {
            args: Prisma.NewsTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTypesPayload>
          }
          aggregate: {
            args: Prisma.NewsTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsTypes>
          }
          groupBy: {
            args: Prisma.NewsTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsTypesCountArgs<ExtArgs>
            result: $Utils.Optional<NewsTypesCountAggregateOutputType> | number
          }
        }
      }
      RolesTypes: {
        payload: Prisma.$RolesTypesPayload<ExtArgs>
        fields: Prisma.RolesTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>
          }
          findFirst: {
            args: Prisma.RolesTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>
          }
          findMany: {
            args: Prisma.RolesTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>[]
          }
          create: {
            args: Prisma.RolesTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>
          }
          createMany: {
            args: Prisma.RolesTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>[]
          }
          delete: {
            args: Prisma.RolesTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>
          }
          update: {
            args: Prisma.RolesTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>
          }
          deleteMany: {
            args: Prisma.RolesTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>[]
          }
          upsert: {
            args: Prisma.RolesTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesTypesPayload>
          }
          aggregate: {
            args: Prisma.RolesTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolesTypes>
          }
          groupBy: {
            args: Prisma.RolesTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesTypesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesTypesCountAggregateOutputType> | number
          }
        }
      }
      StatusesTypes: {
        payload: Prisma.$StatusesTypesPayload<ExtArgs>
        fields: Prisma.StatusesTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusesTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusesTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>
          }
          findFirst: {
            args: Prisma.StatusesTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusesTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>
          }
          findMany: {
            args: Prisma.StatusesTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>[]
          }
          create: {
            args: Prisma.StatusesTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>
          }
          createMany: {
            args: Prisma.StatusesTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusesTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>[]
          }
          delete: {
            args: Prisma.StatusesTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>
          }
          update: {
            args: Prisma.StatusesTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>
          }
          deleteMany: {
            args: Prisma.StatusesTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusesTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusesTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>[]
          }
          upsert: {
            args: Prisma.StatusesTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesTypesPayload>
          }
          aggregate: {
            args: Prisma.StatusesTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusesTypes>
          }
          groupBy: {
            args: Prisma.StatusesTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusesTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusesTypesCountArgs<ExtArgs>
            result: $Utils.Optional<StatusesTypesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    log?: LogOmit
    documents?: DocumentsOmit
    documentsTypes?: DocumentsTypesOmit
    news?: NewsOmit
    newsTypes?: NewsTypesOmit
    rolesTypes?: RolesTypesOmit
    statusesTypes?: StatusesTypesOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocumentsTypesCountOutputType
   */

  export type DocumentsTypesCountOutputType = {
    documents: number
  }

  export type DocumentsTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DocumentsTypesCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * DocumentsTypesCountOutputType without action
   */
  export type DocumentsTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypesCountOutputType
     */
    select?: DocumentsTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentsTypesCountOutputType without action
   */
  export type DocumentsTypesCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
  }


  /**
   * Count Type NewsTypesCountOutputType
   */

  export type NewsTypesCountOutputType = {
    news: number
  }

  export type NewsTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsTypesCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * NewsTypesCountOutputType without action
   */
  export type NewsTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypesCountOutputType
     */
    select?: NewsTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsTypesCountOutputType without action
   */
  export type NewsTypesCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }


  /**
   * Count Type RolesTypesCountOutputType
   */

  export type RolesTypesCountOutputType = {
    users: number
  }

  export type RolesTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesTypesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesTypesCountOutputType without action
   */
  export type RolesTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypesCountOutputType
     */
    select?: RolesTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesTypesCountOutputType without action
   */
  export type RolesTypesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type StatusesTypesCountOutputType
   */

  export type StatusesTypesCountOutputType = {
    users: number
  }

  export type StatusesTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | StatusesTypesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * StatusesTypesCountOutputType without action
   */
  export type StatusesTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypesCountOutputType
     */
    select?: StatusesTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusesTypesCountOutputType without action
   */
  export type StatusesTypesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    logs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UsersCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
    entityId: number | null
    userId: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
    entityId: bigint | null
    userId: bigint | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    action: string | null
    entity: string | null
    entityId: bigint | null
    userId: bigint | null
    timestamp: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    entity: string | null
    entityId: bigint | null
    userId: bigint | null
    timestamp: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    action: number
    entity: number
    entityId: number
    userId: number
    timestamp: number
    details: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
    entityId?: true
    userId?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
    entityId?: true
    userId?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    userId?: true
    timestamp?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    userId?: true
    timestamp?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    userId?: true
    timestamp?: true
    details?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    action: string
    entity: string
    entityId: bigint
    userId: bigint
    timestamp: Date
    details: JsonValue | null
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    userId?: boolean
    timestamp?: boolean
    details?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    userId?: boolean
    timestamp?: boolean
    details?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    userId?: boolean
    timestamp?: boolean
    details?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    userId?: boolean
    timestamp?: boolean
    details?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entity" | "entityId" | "userId" | "timestamp" | "details", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      entity: string
      entityId: bigint
      userId: bigint
      timestamp: Date
      details: Prisma.JsonValue | null
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'Int'>
    readonly action: FieldRef<"Log", 'String'>
    readonly entity: FieldRef<"Log", 'String'>
    readonly entityId: FieldRef<"Log", 'BigInt'>
    readonly userId: FieldRef<"Log", 'BigInt'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
    readonly details: FieldRef<"Log", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model Documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    id: number | null
    type_id: number | null
  }

  export type DocumentsSumAggregateOutputType = {
    id: bigint | null
    type_id: bigint | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    type_id: bigint | null
    description: string | null
    file_url: string | null
    created_at: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    type_id: bigint | null
    description: string | null
    file_url: string | null
    created_at: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    title: number
    type_id: number
    description: number
    file_url: number
    created_at: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type DocumentsSumAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type DocumentsMinAggregateInputType = {
    id?: true
    title?: true
    type_id?: true
    description?: true
    file_url?: true
    created_at?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    title?: true
    type_id?: true
    description?: true
    file_url?: true
    created_at?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    title?: true
    type_id?: true
    description?: true
    file_url?: true
    created_at?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to aggregate.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type DocumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithAggregationInput | DocumentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: DocumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: bigint
    title: string | null
    type_id: bigint
    description: string | null
    file_url: string | null
    created_at: Date
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends DocumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type DocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type_id?: boolean
    description?: boolean
    file_url?: boolean
    created_at?: boolean
    type?: boolean | DocumentsTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type_id?: boolean
    description?: boolean
    file_url?: boolean
    created_at?: boolean
    type?: boolean | DocumentsTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type_id?: boolean
    description?: boolean
    file_url?: boolean
    created_at?: boolean
    type?: boolean | DocumentsTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type DocumentsSelectScalar = {
    id?: boolean
    title?: boolean
    type_id?: boolean
    description?: boolean
    file_url?: boolean
    created_at?: boolean
  }

  export type DocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type_id" | "description" | "file_url" | "created_at", ExtArgs["result"]["documents"]>
  export type DocumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | DocumentsTypesDefaultArgs<ExtArgs>
  }
  export type DocumentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | DocumentsTypesDefaultArgs<ExtArgs>
  }
  export type DocumentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | DocumentsTypesDefaultArgs<ExtArgs>
  }

  export type $DocumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documents"
    objects: {
      type: Prisma.$DocumentsTypesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string | null
      type_id: bigint
      description: string | null
      file_url: string | null
      created_at: Date
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type DocumentsGetPayload<S extends boolean | null | undefined | DocumentsDefaultArgs> = $Result.GetResult<Prisma.$DocumentsPayload, S>

  type DocumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface DocumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documents'], meta: { name: 'Documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {DocumentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentsFindUniqueArgs>(args: SelectSubset<T, DocumentsFindUniqueArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentsFindFirstArgs>(args?: SelectSubset<T, DocumentsFindFirstArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentsFindManyArgs>(args?: SelectSubset<T, DocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {DocumentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends DocumentsCreateArgs>(args: SelectSubset<T, DocumentsCreateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentsCreateManyArgs>(args?: SelectSubset<T, DocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentsCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documents.
     * @param {DocumentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends DocumentsDeleteArgs>(args: SelectSubset<T, DocumentsDeleteArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {DocumentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentsUpdateArgs>(args: SelectSubset<T, DocumentsUpdateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentsDeleteManyArgs>(args?: SelectSubset<T, DocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentsUpdateManyArgs>(args: SelectSubset<T, DocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentsUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documents.
     * @param {DocumentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends DocumentsUpsertArgs>(args: SelectSubset<T, DocumentsUpsertArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentsCountArgs>(
      args?: Subset<T, DocumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentsGroupByArgs['orderBy'] }
        : { orderBy?: DocumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documents model
   */
  readonly fields: DocumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends DocumentsTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentsTypesDefaultArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documents model
   */
  interface DocumentsFieldRefs {
    readonly id: FieldRef<"Documents", 'BigInt'>
    readonly title: FieldRef<"Documents", 'String'>
    readonly type_id: FieldRef<"Documents", 'BigInt'>
    readonly description: FieldRef<"Documents", 'String'>
    readonly file_url: FieldRef<"Documents", 'String'>
    readonly created_at: FieldRef<"Documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documents findUnique
   */
  export type DocumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findUniqueOrThrow
   */
  export type DocumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findFirst
   */
  export type DocumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findFirstOrThrow
   */
  export type DocumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findMany
   */
  export type DocumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents create
   */
  export type DocumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Documents.
     */
    data: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
  }

  /**
   * Documents createMany
   */
  export type DocumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documents createManyAndReturn
   */
  export type DocumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documents update
   */
  export type DocumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Documents.
     */
    data: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
    /**
     * Choose, which Documents to update.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents updateMany
   */
  export type DocumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Documents updateManyAndReturn
   */
  export type DocumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documents upsert
   */
  export type DocumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Documents to update in case it exists.
     */
    where: DocumentsWhereUniqueInput
    /**
     * In case the Documents found by the `where` argument doesn't exist, create a new Documents with this data.
     */
    create: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
    /**
     * In case the Documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
  }

  /**
   * Documents delete
   */
  export type DocumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter which Documents to delete.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents deleteMany
   */
  export type DocumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Documents without action
   */
  export type DocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
  }


  /**
   * Model DocumentsTypes
   */

  export type AggregateDocumentsTypes = {
    _count: DocumentsTypesCountAggregateOutputType | null
    _avg: DocumentsTypesAvgAggregateOutputType | null
    _sum: DocumentsTypesSumAggregateOutputType | null
    _min: DocumentsTypesMinAggregateOutputType | null
    _max: DocumentsTypesMaxAggregateOutputType | null
  }

  export type DocumentsTypesAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentsTypesSumAggregateOutputType = {
    id: bigint | null
  }

  export type DocumentsTypesMinAggregateOutputType = {
    id: bigint | null
    type: string | null
  }

  export type DocumentsTypesMaxAggregateOutputType = {
    id: bigint | null
    type: string | null
  }

  export type DocumentsTypesCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type DocumentsTypesAvgAggregateInputType = {
    id?: true
  }

  export type DocumentsTypesSumAggregateInputType = {
    id?: true
  }

  export type DocumentsTypesMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type DocumentsTypesMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type DocumentsTypesCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type DocumentsTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentsTypes to aggregate.
     */
    where?: DocumentsTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentsTypes to fetch.
     */
    orderBy?: DocumentsTypesOrderByWithRelationInput | DocumentsTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentsTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentsTypes
    **/
    _count?: true | DocumentsTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsTypesMaxAggregateInputType
  }

  export type GetDocumentsTypesAggregateType<T extends DocumentsTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentsTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentsTypes[P]>
      : GetScalarType<T[P], AggregateDocumentsTypes[P]>
  }




  export type DocumentsTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsTypesWhereInput
    orderBy?: DocumentsTypesOrderByWithAggregationInput | DocumentsTypesOrderByWithAggregationInput[]
    by: DocumentsTypesScalarFieldEnum[] | DocumentsTypesScalarFieldEnum
    having?: DocumentsTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsTypesCountAggregateInputType | true
    _avg?: DocumentsTypesAvgAggregateInputType
    _sum?: DocumentsTypesSumAggregateInputType
    _min?: DocumentsTypesMinAggregateInputType
    _max?: DocumentsTypesMaxAggregateInputType
  }

  export type DocumentsTypesGroupByOutputType = {
    id: bigint
    type: string
    _count: DocumentsTypesCountAggregateOutputType | null
    _avg: DocumentsTypesAvgAggregateOutputType | null
    _sum: DocumentsTypesSumAggregateOutputType | null
    _min: DocumentsTypesMinAggregateOutputType | null
    _max: DocumentsTypesMaxAggregateOutputType | null
  }

  type GetDocumentsTypesGroupByPayload<T extends DocumentsTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsTypesGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsTypesGroupByOutputType[P]>
        }
      >
    >


  export type DocumentsTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    documents?: boolean | DocumentsTypes$documentsArgs<ExtArgs>
    _count?: boolean | DocumentsTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentsTypes"]>

  export type DocumentsTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["documentsTypes"]>

  export type DocumentsTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["documentsTypes"]>

  export type DocumentsTypesSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type DocumentsTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["documentsTypes"]>
  export type DocumentsTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DocumentsTypes$documentsArgs<ExtArgs>
    _count?: boolean | DocumentsTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentsTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentsTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentsTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentsTypes"
    objects: {
      documents: Prisma.$DocumentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      type: string
    }, ExtArgs["result"]["documentsTypes"]>
    composites: {}
  }

  type DocumentsTypesGetPayload<S extends boolean | null | undefined | DocumentsTypesDefaultArgs> = $Result.GetResult<Prisma.$DocumentsTypesPayload, S>

  type DocumentsTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentsTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsTypesCountAggregateInputType | true
    }

  export interface DocumentsTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentsTypes'], meta: { name: 'DocumentsTypes' } }
    /**
     * Find zero or one DocumentsTypes that matches the filter.
     * @param {DocumentsTypesFindUniqueArgs} args - Arguments to find a DocumentsTypes
     * @example
     * // Get one DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentsTypesFindUniqueArgs>(args: SelectSubset<T, DocumentsTypesFindUniqueArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentsTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentsTypesFindUniqueOrThrowArgs} args - Arguments to find a DocumentsTypes
     * @example
     * // Get one DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentsTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentsTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentsTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsTypesFindFirstArgs} args - Arguments to find a DocumentsTypes
     * @example
     * // Get one DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentsTypesFindFirstArgs>(args?: SelectSubset<T, DocumentsTypesFindFirstArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentsTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsTypesFindFirstOrThrowArgs} args - Arguments to find a DocumentsTypes
     * @example
     * // Get one DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentsTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentsTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentsTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.findMany()
     * 
     * // Get first 10 DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsTypesWithIdOnly = await prisma.documentsTypes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentsTypesFindManyArgs>(args?: SelectSubset<T, DocumentsTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentsTypes.
     * @param {DocumentsTypesCreateArgs} args - Arguments to create a DocumentsTypes.
     * @example
     * // Create one DocumentsTypes
     * const DocumentsTypes = await prisma.documentsTypes.create({
     *   data: {
     *     // ... data to create a DocumentsTypes
     *   }
     * })
     * 
     */
    create<T extends DocumentsTypesCreateArgs>(args: SelectSubset<T, DocumentsTypesCreateArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentsTypes.
     * @param {DocumentsTypesCreateManyArgs} args - Arguments to create many DocumentsTypes.
     * @example
     * // Create many DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentsTypesCreateManyArgs>(args?: SelectSubset<T, DocumentsTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentsTypes and returns the data saved in the database.
     * @param {DocumentsTypesCreateManyAndReturnArgs} args - Arguments to create many DocumentsTypes.
     * @example
     * // Create many DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentsTypes and only return the `id`
     * const documentsTypesWithIdOnly = await prisma.documentsTypes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentsTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentsTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentsTypes.
     * @param {DocumentsTypesDeleteArgs} args - Arguments to delete one DocumentsTypes.
     * @example
     * // Delete one DocumentsTypes
     * const DocumentsTypes = await prisma.documentsTypes.delete({
     *   where: {
     *     // ... filter to delete one DocumentsTypes
     *   }
     * })
     * 
     */
    delete<T extends DocumentsTypesDeleteArgs>(args: SelectSubset<T, DocumentsTypesDeleteArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentsTypes.
     * @param {DocumentsTypesUpdateArgs} args - Arguments to update one DocumentsTypes.
     * @example
     * // Update one DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentsTypesUpdateArgs>(args: SelectSubset<T, DocumentsTypesUpdateArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentsTypes.
     * @param {DocumentsTypesDeleteManyArgs} args - Arguments to filter DocumentsTypes to delete.
     * @example
     * // Delete a few DocumentsTypes
     * const { count } = await prisma.documentsTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentsTypesDeleteManyArgs>(args?: SelectSubset<T, DocumentsTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentsTypesUpdateManyArgs>(args: SelectSubset<T, DocumentsTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentsTypes and returns the data updated in the database.
     * @param {DocumentsTypesUpdateManyAndReturnArgs} args - Arguments to update many DocumentsTypes.
     * @example
     * // Update many DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentsTypes and only return the `id`
     * const documentsTypesWithIdOnly = await prisma.documentsTypes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentsTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentsTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentsTypes.
     * @param {DocumentsTypesUpsertArgs} args - Arguments to update or create a DocumentsTypes.
     * @example
     * // Update or create a DocumentsTypes
     * const documentsTypes = await prisma.documentsTypes.upsert({
     *   create: {
     *     // ... data to create a DocumentsTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentsTypes we want to update
     *   }
     * })
     */
    upsert<T extends DocumentsTypesUpsertArgs>(args: SelectSubset<T, DocumentsTypesUpsertArgs<ExtArgs>>): Prisma__DocumentsTypesClient<$Result.GetResult<Prisma.$DocumentsTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsTypesCountArgs} args - Arguments to filter DocumentsTypes to count.
     * @example
     * // Count the number of DocumentsTypes
     * const count = await prisma.documentsTypes.count({
     *   where: {
     *     // ... the filter for the DocumentsTypes we want to count
     *   }
     * })
    **/
    count<T extends DocumentsTypesCountArgs>(
      args?: Subset<T, DocumentsTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentsTypesAggregateArgs>(args: Subset<T, DocumentsTypesAggregateArgs>): Prisma.PrismaPromise<GetDocumentsTypesAggregateType<T>>

    /**
     * Group by DocumentsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentsTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentsTypesGroupByArgs['orderBy'] }
        : { orderBy?: DocumentsTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentsTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentsTypes model
   */
  readonly fields: DocumentsTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentsTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentsTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends DocumentsTypes$documentsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentsTypes$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentsTypes model
   */
  interface DocumentsTypesFieldRefs {
    readonly id: FieldRef<"DocumentsTypes", 'BigInt'>
    readonly type: FieldRef<"DocumentsTypes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentsTypes findUnique
   */
  export type DocumentsTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentsTypes to fetch.
     */
    where: DocumentsTypesWhereUniqueInput
  }

  /**
   * DocumentsTypes findUniqueOrThrow
   */
  export type DocumentsTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentsTypes to fetch.
     */
    where: DocumentsTypesWhereUniqueInput
  }

  /**
   * DocumentsTypes findFirst
   */
  export type DocumentsTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentsTypes to fetch.
     */
    where?: DocumentsTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentsTypes to fetch.
     */
    orderBy?: DocumentsTypesOrderByWithRelationInput | DocumentsTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentsTypes.
     */
    cursor?: DocumentsTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentsTypes.
     */
    distinct?: DocumentsTypesScalarFieldEnum | DocumentsTypesScalarFieldEnum[]
  }

  /**
   * DocumentsTypes findFirstOrThrow
   */
  export type DocumentsTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentsTypes to fetch.
     */
    where?: DocumentsTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentsTypes to fetch.
     */
    orderBy?: DocumentsTypesOrderByWithRelationInput | DocumentsTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentsTypes.
     */
    cursor?: DocumentsTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentsTypes.
     */
    distinct?: DocumentsTypesScalarFieldEnum | DocumentsTypesScalarFieldEnum[]
  }

  /**
   * DocumentsTypes findMany
   */
  export type DocumentsTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentsTypes to fetch.
     */
    where?: DocumentsTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentsTypes to fetch.
     */
    orderBy?: DocumentsTypesOrderByWithRelationInput | DocumentsTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentsTypes.
     */
    cursor?: DocumentsTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentsTypes.
     */
    skip?: number
    distinct?: DocumentsTypesScalarFieldEnum | DocumentsTypesScalarFieldEnum[]
  }

  /**
   * DocumentsTypes create
   */
  export type DocumentsTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentsTypes.
     */
    data: XOR<DocumentsTypesCreateInput, DocumentsTypesUncheckedCreateInput>
  }

  /**
   * DocumentsTypes createMany
   */
  export type DocumentsTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentsTypes.
     */
    data: DocumentsTypesCreateManyInput | DocumentsTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentsTypes createManyAndReturn
   */
  export type DocumentsTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentsTypes.
     */
    data: DocumentsTypesCreateManyInput | DocumentsTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentsTypes update
   */
  export type DocumentsTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentsTypes.
     */
    data: XOR<DocumentsTypesUpdateInput, DocumentsTypesUncheckedUpdateInput>
    /**
     * Choose, which DocumentsTypes to update.
     */
    where: DocumentsTypesWhereUniqueInput
  }

  /**
   * DocumentsTypes updateMany
   */
  export type DocumentsTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentsTypes.
     */
    data: XOR<DocumentsTypesUpdateManyMutationInput, DocumentsTypesUncheckedUpdateManyInput>
    /**
     * Filter which DocumentsTypes to update
     */
    where?: DocumentsTypesWhereInput
    /**
     * Limit how many DocumentsTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentsTypes updateManyAndReturn
   */
  export type DocumentsTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * The data used to update DocumentsTypes.
     */
    data: XOR<DocumentsTypesUpdateManyMutationInput, DocumentsTypesUncheckedUpdateManyInput>
    /**
     * Filter which DocumentsTypes to update
     */
    where?: DocumentsTypesWhereInput
    /**
     * Limit how many DocumentsTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentsTypes upsert
   */
  export type DocumentsTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentsTypes to update in case it exists.
     */
    where: DocumentsTypesWhereUniqueInput
    /**
     * In case the DocumentsTypes found by the `where` argument doesn't exist, create a new DocumentsTypes with this data.
     */
    create: XOR<DocumentsTypesCreateInput, DocumentsTypesUncheckedCreateInput>
    /**
     * In case the DocumentsTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentsTypesUpdateInput, DocumentsTypesUncheckedUpdateInput>
  }

  /**
   * DocumentsTypes delete
   */
  export type DocumentsTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
    /**
     * Filter which DocumentsTypes to delete.
     */
    where: DocumentsTypesWhereUniqueInput
  }

  /**
   * DocumentsTypes deleteMany
   */
  export type DocumentsTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentsTypes to delete
     */
    where?: DocumentsTypesWhereInput
    /**
     * Limit how many DocumentsTypes to delete.
     */
    limit?: number
  }

  /**
   * DocumentsTypes.documents
   */
  export type DocumentsTypes$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    cursor?: DocumentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * DocumentsTypes without action
   */
  export type DocumentsTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsTypes
     */
    select?: DocumentsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentsTypes
     */
    omit?: DocumentsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsTypesInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    id: number | null
    type_id: number | null
  }

  export type NewsSumAggregateOutputType = {
    id: bigint | null
    type_id: bigint | null
  }

  export type NewsMinAggregateOutputType = {
    id: bigint | null
    type_id: bigint | null
    title: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: bigint | null
    type_id: bigint | null
    title: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    type_id: number
    title: number
    description: number
    image_url: number
    created_at: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type NewsSumAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    type_id?: true
    title?: true
    description?: true
    image_url?: true
    created_at?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    type_id?: true
    title?: true
    description?: true
    image_url?: true
    created_at?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    type_id?: true
    title?: true
    description?: true
    image_url?: true
    created_at?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: bigint
    type_id: bigint
    title: string | null
    description: string | null
    image_url: string | null
    created_at: Date
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
    type?: boolean | NewsTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
    type?: boolean | NewsTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
    type?: boolean | NewsTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    type_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type_id" | "title" | "description" | "image_url" | "created_at", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | NewsTypesDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | NewsTypesDefaultArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | NewsTypesDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      type: Prisma.$NewsTypesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      type_id: bigint
      title: string | null
      description: string | null
      image_url: string | null
      created_at: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends NewsTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsTypesDefaultArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'BigInt'>
    readonly type_id: FieldRef<"News", 'BigInt'>
    readonly title: FieldRef<"News", 'String'>
    readonly description: FieldRef<"News", 'String'>
    readonly image_url: FieldRef<"News", 'String'>
    readonly created_at: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model NewsTypes
   */

  export type AggregateNewsTypes = {
    _count: NewsTypesCountAggregateOutputType | null
    _avg: NewsTypesAvgAggregateOutputType | null
    _sum: NewsTypesSumAggregateOutputType | null
    _min: NewsTypesMinAggregateOutputType | null
    _max: NewsTypesMaxAggregateOutputType | null
  }

  export type NewsTypesAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsTypesSumAggregateOutputType = {
    id: bigint | null
  }

  export type NewsTypesMinAggregateOutputType = {
    id: bigint | null
    type: string | null
  }

  export type NewsTypesMaxAggregateOutputType = {
    id: bigint | null
    type: string | null
  }

  export type NewsTypesCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type NewsTypesAvgAggregateInputType = {
    id?: true
  }

  export type NewsTypesSumAggregateInputType = {
    id?: true
  }

  export type NewsTypesMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type NewsTypesMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type NewsTypesCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type NewsTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTypes to aggregate.
     */
    where?: NewsTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTypes to fetch.
     */
    orderBy?: NewsTypesOrderByWithRelationInput | NewsTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsTypes
    **/
    _count?: true | NewsTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsTypesMaxAggregateInputType
  }

  export type GetNewsTypesAggregateType<T extends NewsTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsTypes[P]>
      : GetScalarType<T[P], AggregateNewsTypes[P]>
  }




  export type NewsTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTypesWhereInput
    orderBy?: NewsTypesOrderByWithAggregationInput | NewsTypesOrderByWithAggregationInput[]
    by: NewsTypesScalarFieldEnum[] | NewsTypesScalarFieldEnum
    having?: NewsTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsTypesCountAggregateInputType | true
    _avg?: NewsTypesAvgAggregateInputType
    _sum?: NewsTypesSumAggregateInputType
    _min?: NewsTypesMinAggregateInputType
    _max?: NewsTypesMaxAggregateInputType
  }

  export type NewsTypesGroupByOutputType = {
    id: bigint
    type: string
    _count: NewsTypesCountAggregateOutputType | null
    _avg: NewsTypesAvgAggregateOutputType | null
    _sum: NewsTypesSumAggregateOutputType | null
    _min: NewsTypesMinAggregateOutputType | null
    _max: NewsTypesMaxAggregateOutputType | null
  }

  type GetNewsTypesGroupByPayload<T extends NewsTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsTypesGroupByOutputType[P]>
            : GetScalarType<T[P], NewsTypesGroupByOutputType[P]>
        }
      >
    >


  export type NewsTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    news?: boolean | NewsTypes$newsArgs<ExtArgs>
    _count?: boolean | NewsTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTypes"]>

  export type NewsTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["newsTypes"]>

  export type NewsTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["newsTypes"]>

  export type NewsTypesSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type NewsTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["newsTypes"]>
  export type NewsTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsTypes$newsArgs<ExtArgs>
    _count?: boolean | NewsTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsTypes"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      type: string
    }, ExtArgs["result"]["newsTypes"]>
    composites: {}
  }

  type NewsTypesGetPayload<S extends boolean | null | undefined | NewsTypesDefaultArgs> = $Result.GetResult<Prisma.$NewsTypesPayload, S>

  type NewsTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsTypesCountAggregateInputType | true
    }

  export interface NewsTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsTypes'], meta: { name: 'NewsTypes' } }
    /**
     * Find zero or one NewsTypes that matches the filter.
     * @param {NewsTypesFindUniqueArgs} args - Arguments to find a NewsTypes
     * @example
     * // Get one NewsTypes
     * const newsTypes = await prisma.newsTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsTypesFindUniqueArgs>(args: SelectSubset<T, NewsTypesFindUniqueArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsTypesFindUniqueOrThrowArgs} args - Arguments to find a NewsTypes
     * @example
     * // Get one NewsTypes
     * const newsTypes = await prisma.newsTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTypesFindFirstArgs} args - Arguments to find a NewsTypes
     * @example
     * // Get one NewsTypes
     * const newsTypes = await prisma.newsTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsTypesFindFirstArgs>(args?: SelectSubset<T, NewsTypesFindFirstArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTypesFindFirstOrThrowArgs} args - Arguments to find a NewsTypes
     * @example
     * // Get one NewsTypes
     * const newsTypes = await prisma.newsTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsTypes
     * const newsTypes = await prisma.newsTypes.findMany()
     * 
     * // Get first 10 NewsTypes
     * const newsTypes = await prisma.newsTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsTypesWithIdOnly = await prisma.newsTypes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsTypesFindManyArgs>(args?: SelectSubset<T, NewsTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsTypes.
     * @param {NewsTypesCreateArgs} args - Arguments to create a NewsTypes.
     * @example
     * // Create one NewsTypes
     * const NewsTypes = await prisma.newsTypes.create({
     *   data: {
     *     // ... data to create a NewsTypes
     *   }
     * })
     * 
     */
    create<T extends NewsTypesCreateArgs>(args: SelectSubset<T, NewsTypesCreateArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsTypes.
     * @param {NewsTypesCreateManyArgs} args - Arguments to create many NewsTypes.
     * @example
     * // Create many NewsTypes
     * const newsTypes = await prisma.newsTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsTypesCreateManyArgs>(args?: SelectSubset<T, NewsTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsTypes and returns the data saved in the database.
     * @param {NewsTypesCreateManyAndReturnArgs} args - Arguments to create many NewsTypes.
     * @example
     * // Create many NewsTypes
     * const newsTypes = await prisma.newsTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsTypes and only return the `id`
     * const newsTypesWithIdOnly = await prisma.newsTypes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsTypes.
     * @param {NewsTypesDeleteArgs} args - Arguments to delete one NewsTypes.
     * @example
     * // Delete one NewsTypes
     * const NewsTypes = await prisma.newsTypes.delete({
     *   where: {
     *     // ... filter to delete one NewsTypes
     *   }
     * })
     * 
     */
    delete<T extends NewsTypesDeleteArgs>(args: SelectSubset<T, NewsTypesDeleteArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsTypes.
     * @param {NewsTypesUpdateArgs} args - Arguments to update one NewsTypes.
     * @example
     * // Update one NewsTypes
     * const newsTypes = await prisma.newsTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsTypesUpdateArgs>(args: SelectSubset<T, NewsTypesUpdateArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsTypes.
     * @param {NewsTypesDeleteManyArgs} args - Arguments to filter NewsTypes to delete.
     * @example
     * // Delete a few NewsTypes
     * const { count } = await prisma.newsTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsTypesDeleteManyArgs>(args?: SelectSubset<T, NewsTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsTypes
     * const newsTypes = await prisma.newsTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsTypesUpdateManyArgs>(args: SelectSubset<T, NewsTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTypes and returns the data updated in the database.
     * @param {NewsTypesUpdateManyAndReturnArgs} args - Arguments to update many NewsTypes.
     * @example
     * // Update many NewsTypes
     * const newsTypes = await prisma.newsTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsTypes and only return the `id`
     * const newsTypesWithIdOnly = await prisma.newsTypes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsTypes.
     * @param {NewsTypesUpsertArgs} args - Arguments to update or create a NewsTypes.
     * @example
     * // Update or create a NewsTypes
     * const newsTypes = await prisma.newsTypes.upsert({
     *   create: {
     *     // ... data to create a NewsTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsTypes we want to update
     *   }
     * })
     */
    upsert<T extends NewsTypesUpsertArgs>(args: SelectSubset<T, NewsTypesUpsertArgs<ExtArgs>>): Prisma__NewsTypesClient<$Result.GetResult<Prisma.$NewsTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTypesCountArgs} args - Arguments to filter NewsTypes to count.
     * @example
     * // Count the number of NewsTypes
     * const count = await prisma.newsTypes.count({
     *   where: {
     *     // ... the filter for the NewsTypes we want to count
     *   }
     * })
    **/
    count<T extends NewsTypesCountArgs>(
      args?: Subset<T, NewsTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsTypesAggregateArgs>(args: Subset<T, NewsTypesAggregateArgs>): Prisma.PrismaPromise<GetNewsTypesAggregateType<T>>

    /**
     * Group by NewsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsTypesGroupByArgs['orderBy'] }
        : { orderBy?: NewsTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsTypes model
   */
  readonly fields: NewsTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsTypes$newsArgs<ExtArgs> = {}>(args?: Subset<T, NewsTypes$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsTypes model
   */
  interface NewsTypesFieldRefs {
    readonly id: FieldRef<"NewsTypes", 'BigInt'>
    readonly type: FieldRef<"NewsTypes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsTypes findUnique
   */
  export type NewsTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * Filter, which NewsTypes to fetch.
     */
    where: NewsTypesWhereUniqueInput
  }

  /**
   * NewsTypes findUniqueOrThrow
   */
  export type NewsTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * Filter, which NewsTypes to fetch.
     */
    where: NewsTypesWhereUniqueInput
  }

  /**
   * NewsTypes findFirst
   */
  export type NewsTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * Filter, which NewsTypes to fetch.
     */
    where?: NewsTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTypes to fetch.
     */
    orderBy?: NewsTypesOrderByWithRelationInput | NewsTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTypes.
     */
    cursor?: NewsTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTypes.
     */
    distinct?: NewsTypesScalarFieldEnum | NewsTypesScalarFieldEnum[]
  }

  /**
   * NewsTypes findFirstOrThrow
   */
  export type NewsTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * Filter, which NewsTypes to fetch.
     */
    where?: NewsTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTypes to fetch.
     */
    orderBy?: NewsTypesOrderByWithRelationInput | NewsTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTypes.
     */
    cursor?: NewsTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTypes.
     */
    distinct?: NewsTypesScalarFieldEnum | NewsTypesScalarFieldEnum[]
  }

  /**
   * NewsTypes findMany
   */
  export type NewsTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * Filter, which NewsTypes to fetch.
     */
    where?: NewsTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTypes to fetch.
     */
    orderBy?: NewsTypesOrderByWithRelationInput | NewsTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsTypes.
     */
    cursor?: NewsTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTypes.
     */
    skip?: number
    distinct?: NewsTypesScalarFieldEnum | NewsTypesScalarFieldEnum[]
  }

  /**
   * NewsTypes create
   */
  export type NewsTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsTypes.
     */
    data: XOR<NewsTypesCreateInput, NewsTypesUncheckedCreateInput>
  }

  /**
   * NewsTypes createMany
   */
  export type NewsTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsTypes.
     */
    data: NewsTypesCreateManyInput | NewsTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTypes createManyAndReturn
   */
  export type NewsTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * The data used to create many NewsTypes.
     */
    data: NewsTypesCreateManyInput | NewsTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTypes update
   */
  export type NewsTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsTypes.
     */
    data: XOR<NewsTypesUpdateInput, NewsTypesUncheckedUpdateInput>
    /**
     * Choose, which NewsTypes to update.
     */
    where: NewsTypesWhereUniqueInput
  }

  /**
   * NewsTypes updateMany
   */
  export type NewsTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsTypes.
     */
    data: XOR<NewsTypesUpdateManyMutationInput, NewsTypesUncheckedUpdateManyInput>
    /**
     * Filter which NewsTypes to update
     */
    where?: NewsTypesWhereInput
    /**
     * Limit how many NewsTypes to update.
     */
    limit?: number
  }

  /**
   * NewsTypes updateManyAndReturn
   */
  export type NewsTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * The data used to update NewsTypes.
     */
    data: XOR<NewsTypesUpdateManyMutationInput, NewsTypesUncheckedUpdateManyInput>
    /**
     * Filter which NewsTypes to update
     */
    where?: NewsTypesWhereInput
    /**
     * Limit how many NewsTypes to update.
     */
    limit?: number
  }

  /**
   * NewsTypes upsert
   */
  export type NewsTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsTypes to update in case it exists.
     */
    where: NewsTypesWhereUniqueInput
    /**
     * In case the NewsTypes found by the `where` argument doesn't exist, create a new NewsTypes with this data.
     */
    create: XOR<NewsTypesCreateInput, NewsTypesUncheckedCreateInput>
    /**
     * In case the NewsTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsTypesUpdateInput, NewsTypesUncheckedUpdateInput>
  }

  /**
   * NewsTypes delete
   */
  export type NewsTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
    /**
     * Filter which NewsTypes to delete.
     */
    where: NewsTypesWhereUniqueInput
  }

  /**
   * NewsTypes deleteMany
   */
  export type NewsTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTypes to delete
     */
    where?: NewsTypesWhereInput
    /**
     * Limit how many NewsTypes to delete.
     */
    limit?: number
  }

  /**
   * NewsTypes.news
   */
  export type NewsTypes$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * NewsTypes without action
   */
  export type NewsTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTypes
     */
    select?: NewsTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTypes
     */
    omit?: NewsTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTypesInclude<ExtArgs> | null
  }


  /**
   * Model RolesTypes
   */

  export type AggregateRolesTypes = {
    _count: RolesTypesCountAggregateOutputType | null
    _avg: RolesTypesAvgAggregateOutputType | null
    _sum: RolesTypesSumAggregateOutputType | null
    _min: RolesTypesMinAggregateOutputType | null
    _max: RolesTypesMaxAggregateOutputType | null
  }

  export type RolesTypesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesTypesSumAggregateOutputType = {
    id: bigint | null
  }

  export type RolesTypesMinAggregateOutputType = {
    id: bigint | null
    role: string | null
  }

  export type RolesTypesMaxAggregateOutputType = {
    id: bigint | null
    role: string | null
  }

  export type RolesTypesCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type RolesTypesAvgAggregateInputType = {
    id?: true
  }

  export type RolesTypesSumAggregateInputType = {
    id?: true
  }

  export type RolesTypesMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type RolesTypesMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type RolesTypesCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type RolesTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolesTypes to aggregate.
     */
    where?: RolesTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolesTypes to fetch.
     */
    orderBy?: RolesTypesOrderByWithRelationInput | RolesTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolesTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolesTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolesTypes
    **/
    _count?: true | RolesTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesTypesMaxAggregateInputType
  }

  export type GetRolesTypesAggregateType<T extends RolesTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateRolesTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolesTypes[P]>
      : GetScalarType<T[P], AggregateRolesTypes[P]>
  }




  export type RolesTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesTypesWhereInput
    orderBy?: RolesTypesOrderByWithAggregationInput | RolesTypesOrderByWithAggregationInput[]
    by: RolesTypesScalarFieldEnum[] | RolesTypesScalarFieldEnum
    having?: RolesTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesTypesCountAggregateInputType | true
    _avg?: RolesTypesAvgAggregateInputType
    _sum?: RolesTypesSumAggregateInputType
    _min?: RolesTypesMinAggregateInputType
    _max?: RolesTypesMaxAggregateInputType
  }

  export type RolesTypesGroupByOutputType = {
    id: bigint
    role: string
    _count: RolesTypesCountAggregateOutputType | null
    _avg: RolesTypesAvgAggregateOutputType | null
    _sum: RolesTypesSumAggregateOutputType | null
    _min: RolesTypesMinAggregateOutputType | null
    _max: RolesTypesMaxAggregateOutputType | null
  }

  type GetRolesTypesGroupByPayload<T extends RolesTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesTypesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesTypesGroupByOutputType[P]>
        }
      >
    >


  export type RolesTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    users?: boolean | RolesTypes$usersArgs<ExtArgs>
    _count?: boolean | RolesTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolesTypes"]>

  export type RolesTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["rolesTypes"]>

  export type RolesTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["rolesTypes"]>

  export type RolesTypesSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type RolesTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role", ExtArgs["result"]["rolesTypes"]>
  export type RolesTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesTypes$usersArgs<ExtArgs>
    _count?: boolean | RolesTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolesTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolesTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolesTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolesTypes"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      role: string
    }, ExtArgs["result"]["rolesTypes"]>
    composites: {}
  }

  type RolesTypesGetPayload<S extends boolean | null | undefined | RolesTypesDefaultArgs> = $Result.GetResult<Prisma.$RolesTypesPayload, S>

  type RolesTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesTypesCountAggregateInputType | true
    }

  export interface RolesTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolesTypes'], meta: { name: 'RolesTypes' } }
    /**
     * Find zero or one RolesTypes that matches the filter.
     * @param {RolesTypesFindUniqueArgs} args - Arguments to find a RolesTypes
     * @example
     * // Get one RolesTypes
     * const rolesTypes = await prisma.rolesTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesTypesFindUniqueArgs>(args: SelectSubset<T, RolesTypesFindUniqueArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolesTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesTypesFindUniqueOrThrowArgs} args - Arguments to find a RolesTypes
     * @example
     * // Get one RolesTypes
     * const rolesTypes = await prisma.rolesTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolesTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesTypesFindFirstArgs} args - Arguments to find a RolesTypes
     * @example
     * // Get one RolesTypes
     * const rolesTypes = await prisma.rolesTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesTypesFindFirstArgs>(args?: SelectSubset<T, RolesTypesFindFirstArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolesTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesTypesFindFirstOrThrowArgs} args - Arguments to find a RolesTypes
     * @example
     * // Get one RolesTypes
     * const rolesTypes = await prisma.rolesTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolesTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolesTypes
     * const rolesTypes = await prisma.rolesTypes.findMany()
     * 
     * // Get first 10 RolesTypes
     * const rolesTypes = await prisma.rolesTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesTypesWithIdOnly = await prisma.rolesTypes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesTypesFindManyArgs>(args?: SelectSubset<T, RolesTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolesTypes.
     * @param {RolesTypesCreateArgs} args - Arguments to create a RolesTypes.
     * @example
     * // Create one RolesTypes
     * const RolesTypes = await prisma.rolesTypes.create({
     *   data: {
     *     // ... data to create a RolesTypes
     *   }
     * })
     * 
     */
    create<T extends RolesTypesCreateArgs>(args: SelectSubset<T, RolesTypesCreateArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolesTypes.
     * @param {RolesTypesCreateManyArgs} args - Arguments to create many RolesTypes.
     * @example
     * // Create many RolesTypes
     * const rolesTypes = await prisma.rolesTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesTypesCreateManyArgs>(args?: SelectSubset<T, RolesTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolesTypes and returns the data saved in the database.
     * @param {RolesTypesCreateManyAndReturnArgs} args - Arguments to create many RolesTypes.
     * @example
     * // Create many RolesTypes
     * const rolesTypes = await prisma.rolesTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolesTypes and only return the `id`
     * const rolesTypesWithIdOnly = await prisma.rolesTypes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolesTypes.
     * @param {RolesTypesDeleteArgs} args - Arguments to delete one RolesTypes.
     * @example
     * // Delete one RolesTypes
     * const RolesTypes = await prisma.rolesTypes.delete({
     *   where: {
     *     // ... filter to delete one RolesTypes
     *   }
     * })
     * 
     */
    delete<T extends RolesTypesDeleteArgs>(args: SelectSubset<T, RolesTypesDeleteArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolesTypes.
     * @param {RolesTypesUpdateArgs} args - Arguments to update one RolesTypes.
     * @example
     * // Update one RolesTypes
     * const rolesTypes = await prisma.rolesTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesTypesUpdateArgs>(args: SelectSubset<T, RolesTypesUpdateArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolesTypes.
     * @param {RolesTypesDeleteManyArgs} args - Arguments to filter RolesTypes to delete.
     * @example
     * // Delete a few RolesTypes
     * const { count } = await prisma.rolesTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesTypesDeleteManyArgs>(args?: SelectSubset<T, RolesTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolesTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolesTypes
     * const rolesTypes = await prisma.rolesTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesTypesUpdateManyArgs>(args: SelectSubset<T, RolesTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolesTypes and returns the data updated in the database.
     * @param {RolesTypesUpdateManyAndReturnArgs} args - Arguments to update many RolesTypes.
     * @example
     * // Update many RolesTypes
     * const rolesTypes = await prisma.rolesTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolesTypes and only return the `id`
     * const rolesTypesWithIdOnly = await prisma.rolesTypes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolesTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolesTypes.
     * @param {RolesTypesUpsertArgs} args - Arguments to update or create a RolesTypes.
     * @example
     * // Update or create a RolesTypes
     * const rolesTypes = await prisma.rolesTypes.upsert({
     *   create: {
     *     // ... data to create a RolesTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolesTypes we want to update
     *   }
     * })
     */
    upsert<T extends RolesTypesUpsertArgs>(args: SelectSubset<T, RolesTypesUpsertArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolesTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesTypesCountArgs} args - Arguments to filter RolesTypes to count.
     * @example
     * // Count the number of RolesTypes
     * const count = await prisma.rolesTypes.count({
     *   where: {
     *     // ... the filter for the RolesTypes we want to count
     *   }
     * })
    **/
    count<T extends RolesTypesCountArgs>(
      args?: Subset<T, RolesTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolesTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesTypesAggregateArgs>(args: Subset<T, RolesTypesAggregateArgs>): Prisma.PrismaPromise<GetRolesTypesAggregateType<T>>

    /**
     * Group by RolesTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesTypesGroupByArgs['orderBy'] }
        : { orderBy?: RolesTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolesTypes model
   */
  readonly fields: RolesTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolesTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends RolesTypes$usersArgs<ExtArgs> = {}>(args?: Subset<T, RolesTypes$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolesTypes model
   */
  interface RolesTypesFieldRefs {
    readonly id: FieldRef<"RolesTypes", 'BigInt'>
    readonly role: FieldRef<"RolesTypes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RolesTypes findUnique
   */
  export type RolesTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * Filter, which RolesTypes to fetch.
     */
    where: RolesTypesWhereUniqueInput
  }

  /**
   * RolesTypes findUniqueOrThrow
   */
  export type RolesTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * Filter, which RolesTypes to fetch.
     */
    where: RolesTypesWhereUniqueInput
  }

  /**
   * RolesTypes findFirst
   */
  export type RolesTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * Filter, which RolesTypes to fetch.
     */
    where?: RolesTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolesTypes to fetch.
     */
    orderBy?: RolesTypesOrderByWithRelationInput | RolesTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolesTypes.
     */
    cursor?: RolesTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolesTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolesTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolesTypes.
     */
    distinct?: RolesTypesScalarFieldEnum | RolesTypesScalarFieldEnum[]
  }

  /**
   * RolesTypes findFirstOrThrow
   */
  export type RolesTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * Filter, which RolesTypes to fetch.
     */
    where?: RolesTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolesTypes to fetch.
     */
    orderBy?: RolesTypesOrderByWithRelationInput | RolesTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolesTypes.
     */
    cursor?: RolesTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolesTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolesTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolesTypes.
     */
    distinct?: RolesTypesScalarFieldEnum | RolesTypesScalarFieldEnum[]
  }

  /**
   * RolesTypes findMany
   */
  export type RolesTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * Filter, which RolesTypes to fetch.
     */
    where?: RolesTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolesTypes to fetch.
     */
    orderBy?: RolesTypesOrderByWithRelationInput | RolesTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolesTypes.
     */
    cursor?: RolesTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolesTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolesTypes.
     */
    skip?: number
    distinct?: RolesTypesScalarFieldEnum | RolesTypesScalarFieldEnum[]
  }

  /**
   * RolesTypes create
   */
  export type RolesTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a RolesTypes.
     */
    data: XOR<RolesTypesCreateInput, RolesTypesUncheckedCreateInput>
  }

  /**
   * RolesTypes createMany
   */
  export type RolesTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolesTypes.
     */
    data: RolesTypesCreateManyInput | RolesTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolesTypes createManyAndReturn
   */
  export type RolesTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * The data used to create many RolesTypes.
     */
    data: RolesTypesCreateManyInput | RolesTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolesTypes update
   */
  export type RolesTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a RolesTypes.
     */
    data: XOR<RolesTypesUpdateInput, RolesTypesUncheckedUpdateInput>
    /**
     * Choose, which RolesTypes to update.
     */
    where: RolesTypesWhereUniqueInput
  }

  /**
   * RolesTypes updateMany
   */
  export type RolesTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolesTypes.
     */
    data: XOR<RolesTypesUpdateManyMutationInput, RolesTypesUncheckedUpdateManyInput>
    /**
     * Filter which RolesTypes to update
     */
    where?: RolesTypesWhereInput
    /**
     * Limit how many RolesTypes to update.
     */
    limit?: number
  }

  /**
   * RolesTypes updateManyAndReturn
   */
  export type RolesTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * The data used to update RolesTypes.
     */
    data: XOR<RolesTypesUpdateManyMutationInput, RolesTypesUncheckedUpdateManyInput>
    /**
     * Filter which RolesTypes to update
     */
    where?: RolesTypesWhereInput
    /**
     * Limit how many RolesTypes to update.
     */
    limit?: number
  }

  /**
   * RolesTypes upsert
   */
  export type RolesTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the RolesTypes to update in case it exists.
     */
    where: RolesTypesWhereUniqueInput
    /**
     * In case the RolesTypes found by the `where` argument doesn't exist, create a new RolesTypes with this data.
     */
    create: XOR<RolesTypesCreateInput, RolesTypesUncheckedCreateInput>
    /**
     * In case the RolesTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesTypesUpdateInput, RolesTypesUncheckedUpdateInput>
  }

  /**
   * RolesTypes delete
   */
  export type RolesTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
    /**
     * Filter which RolesTypes to delete.
     */
    where: RolesTypesWhereUniqueInput
  }

  /**
   * RolesTypes deleteMany
   */
  export type RolesTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolesTypes to delete
     */
    where?: RolesTypesWhereInput
    /**
     * Limit how many RolesTypes to delete.
     */
    limit?: number
  }

  /**
   * RolesTypes.users
   */
  export type RolesTypes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * RolesTypes without action
   */
  export type RolesTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesTypes
     */
    select?: RolesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolesTypes
     */
    omit?: RolesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesTypesInclude<ExtArgs> | null
  }


  /**
   * Model StatusesTypes
   */

  export type AggregateStatusesTypes = {
    _count: StatusesTypesCountAggregateOutputType | null
    _avg: StatusesTypesAvgAggregateOutputType | null
    _sum: StatusesTypesSumAggregateOutputType | null
    _min: StatusesTypesMinAggregateOutputType | null
    _max: StatusesTypesMaxAggregateOutputType | null
  }

  export type StatusesTypesAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusesTypesSumAggregateOutputType = {
    id: bigint | null
  }

  export type StatusesTypesMinAggregateOutputType = {
    id: bigint | null
    status: string | null
  }

  export type StatusesTypesMaxAggregateOutputType = {
    id: bigint | null
    status: string | null
  }

  export type StatusesTypesCountAggregateOutputType = {
    id: number
    status: number
    _all: number
  }


  export type StatusesTypesAvgAggregateInputType = {
    id?: true
  }

  export type StatusesTypesSumAggregateInputType = {
    id?: true
  }

  export type StatusesTypesMinAggregateInputType = {
    id?: true
    status?: true
  }

  export type StatusesTypesMaxAggregateInputType = {
    id?: true
    status?: true
  }

  export type StatusesTypesCountAggregateInputType = {
    id?: true
    status?: true
    _all?: true
  }

  export type StatusesTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusesTypes to aggregate.
     */
    where?: StatusesTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusesTypes to fetch.
     */
    orderBy?: StatusesTypesOrderByWithRelationInput | StatusesTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusesTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusesTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusesTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusesTypes
    **/
    _count?: true | StatusesTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusesTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusesTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusesTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusesTypesMaxAggregateInputType
  }

  export type GetStatusesTypesAggregateType<T extends StatusesTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusesTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusesTypes[P]>
      : GetScalarType<T[P], AggregateStatusesTypes[P]>
  }




  export type StatusesTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusesTypesWhereInput
    orderBy?: StatusesTypesOrderByWithAggregationInput | StatusesTypesOrderByWithAggregationInput[]
    by: StatusesTypesScalarFieldEnum[] | StatusesTypesScalarFieldEnum
    having?: StatusesTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusesTypesCountAggregateInputType | true
    _avg?: StatusesTypesAvgAggregateInputType
    _sum?: StatusesTypesSumAggregateInputType
    _min?: StatusesTypesMinAggregateInputType
    _max?: StatusesTypesMaxAggregateInputType
  }

  export type StatusesTypesGroupByOutputType = {
    id: bigint
    status: string
    _count: StatusesTypesCountAggregateOutputType | null
    _avg: StatusesTypesAvgAggregateOutputType | null
    _sum: StatusesTypesSumAggregateOutputType | null
    _min: StatusesTypesMinAggregateOutputType | null
    _max: StatusesTypesMaxAggregateOutputType | null
  }

  type GetStatusesTypesGroupByPayload<T extends StatusesTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusesTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusesTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusesTypesGroupByOutputType[P]>
            : GetScalarType<T[P], StatusesTypesGroupByOutputType[P]>
        }
      >
    >


  export type StatusesTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    users?: boolean | StatusesTypes$usersArgs<ExtArgs>
    _count?: boolean | StatusesTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusesTypes"]>

  export type StatusesTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
  }, ExtArgs["result"]["statusesTypes"]>

  export type StatusesTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
  }, ExtArgs["result"]["statusesTypes"]>

  export type StatusesTypesSelectScalar = {
    id?: boolean
    status?: boolean
  }

  export type StatusesTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status", ExtArgs["result"]["statusesTypes"]>
  export type StatusesTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | StatusesTypes$usersArgs<ExtArgs>
    _count?: boolean | StatusesTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusesTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusesTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusesTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusesTypes"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      status: string
    }, ExtArgs["result"]["statusesTypes"]>
    composites: {}
  }

  type StatusesTypesGetPayload<S extends boolean | null | undefined | StatusesTypesDefaultArgs> = $Result.GetResult<Prisma.$StatusesTypesPayload, S>

  type StatusesTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusesTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusesTypesCountAggregateInputType | true
    }

  export interface StatusesTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusesTypes'], meta: { name: 'StatusesTypes' } }
    /**
     * Find zero or one StatusesTypes that matches the filter.
     * @param {StatusesTypesFindUniqueArgs} args - Arguments to find a StatusesTypes
     * @example
     * // Get one StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusesTypesFindUniqueArgs>(args: SelectSubset<T, StatusesTypesFindUniqueArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusesTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusesTypesFindUniqueOrThrowArgs} args - Arguments to find a StatusesTypes
     * @example
     * // Get one StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusesTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusesTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusesTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesTypesFindFirstArgs} args - Arguments to find a StatusesTypes
     * @example
     * // Get one StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusesTypesFindFirstArgs>(args?: SelectSubset<T, StatusesTypesFindFirstArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusesTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesTypesFindFirstOrThrowArgs} args - Arguments to find a StatusesTypes
     * @example
     * // Get one StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusesTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusesTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusesTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.findMany()
     * 
     * // Get first 10 StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusesTypesWithIdOnly = await prisma.statusesTypes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusesTypesFindManyArgs>(args?: SelectSubset<T, StatusesTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusesTypes.
     * @param {StatusesTypesCreateArgs} args - Arguments to create a StatusesTypes.
     * @example
     * // Create one StatusesTypes
     * const StatusesTypes = await prisma.statusesTypes.create({
     *   data: {
     *     // ... data to create a StatusesTypes
     *   }
     * })
     * 
     */
    create<T extends StatusesTypesCreateArgs>(args: SelectSubset<T, StatusesTypesCreateArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusesTypes.
     * @param {StatusesTypesCreateManyArgs} args - Arguments to create many StatusesTypes.
     * @example
     * // Create many StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusesTypesCreateManyArgs>(args?: SelectSubset<T, StatusesTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusesTypes and returns the data saved in the database.
     * @param {StatusesTypesCreateManyAndReturnArgs} args - Arguments to create many StatusesTypes.
     * @example
     * // Create many StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusesTypes and only return the `id`
     * const statusesTypesWithIdOnly = await prisma.statusesTypes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusesTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusesTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusesTypes.
     * @param {StatusesTypesDeleteArgs} args - Arguments to delete one StatusesTypes.
     * @example
     * // Delete one StatusesTypes
     * const StatusesTypes = await prisma.statusesTypes.delete({
     *   where: {
     *     // ... filter to delete one StatusesTypes
     *   }
     * })
     * 
     */
    delete<T extends StatusesTypesDeleteArgs>(args: SelectSubset<T, StatusesTypesDeleteArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusesTypes.
     * @param {StatusesTypesUpdateArgs} args - Arguments to update one StatusesTypes.
     * @example
     * // Update one StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusesTypesUpdateArgs>(args: SelectSubset<T, StatusesTypesUpdateArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusesTypes.
     * @param {StatusesTypesDeleteManyArgs} args - Arguments to filter StatusesTypes to delete.
     * @example
     * // Delete a few StatusesTypes
     * const { count } = await prisma.statusesTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusesTypesDeleteManyArgs>(args?: SelectSubset<T, StatusesTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusesTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusesTypesUpdateManyArgs>(args: SelectSubset<T, StatusesTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusesTypes and returns the data updated in the database.
     * @param {StatusesTypesUpdateManyAndReturnArgs} args - Arguments to update many StatusesTypes.
     * @example
     * // Update many StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusesTypes and only return the `id`
     * const statusesTypesWithIdOnly = await prisma.statusesTypes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusesTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusesTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusesTypes.
     * @param {StatusesTypesUpsertArgs} args - Arguments to update or create a StatusesTypes.
     * @example
     * // Update or create a StatusesTypes
     * const statusesTypes = await prisma.statusesTypes.upsert({
     *   create: {
     *     // ... data to create a StatusesTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusesTypes we want to update
     *   }
     * })
     */
    upsert<T extends StatusesTypesUpsertArgs>(args: SelectSubset<T, StatusesTypesUpsertArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusesTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesTypesCountArgs} args - Arguments to filter StatusesTypes to count.
     * @example
     * // Count the number of StatusesTypes
     * const count = await prisma.statusesTypes.count({
     *   where: {
     *     // ... the filter for the StatusesTypes we want to count
     *   }
     * })
    **/
    count<T extends StatusesTypesCountArgs>(
      args?: Subset<T, StatusesTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusesTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusesTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusesTypesAggregateArgs>(args: Subset<T, StatusesTypesAggregateArgs>): Prisma.PrismaPromise<GetStatusesTypesAggregateType<T>>

    /**
     * Group by StatusesTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusesTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusesTypesGroupByArgs['orderBy'] }
        : { orderBy?: StatusesTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusesTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusesTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusesTypes model
   */
  readonly fields: StatusesTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusesTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusesTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends StatusesTypes$usersArgs<ExtArgs> = {}>(args?: Subset<T, StatusesTypes$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusesTypes model
   */
  interface StatusesTypesFieldRefs {
    readonly id: FieldRef<"StatusesTypes", 'BigInt'>
    readonly status: FieldRef<"StatusesTypes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusesTypes findUnique
   */
  export type StatusesTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * Filter, which StatusesTypes to fetch.
     */
    where: StatusesTypesWhereUniqueInput
  }

  /**
   * StatusesTypes findUniqueOrThrow
   */
  export type StatusesTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * Filter, which StatusesTypes to fetch.
     */
    where: StatusesTypesWhereUniqueInput
  }

  /**
   * StatusesTypes findFirst
   */
  export type StatusesTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * Filter, which StatusesTypes to fetch.
     */
    where?: StatusesTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusesTypes to fetch.
     */
    orderBy?: StatusesTypesOrderByWithRelationInput | StatusesTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusesTypes.
     */
    cursor?: StatusesTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusesTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusesTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusesTypes.
     */
    distinct?: StatusesTypesScalarFieldEnum | StatusesTypesScalarFieldEnum[]
  }

  /**
   * StatusesTypes findFirstOrThrow
   */
  export type StatusesTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * Filter, which StatusesTypes to fetch.
     */
    where?: StatusesTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusesTypes to fetch.
     */
    orderBy?: StatusesTypesOrderByWithRelationInput | StatusesTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusesTypes.
     */
    cursor?: StatusesTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusesTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusesTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusesTypes.
     */
    distinct?: StatusesTypesScalarFieldEnum | StatusesTypesScalarFieldEnum[]
  }

  /**
   * StatusesTypes findMany
   */
  export type StatusesTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * Filter, which StatusesTypes to fetch.
     */
    where?: StatusesTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusesTypes to fetch.
     */
    orderBy?: StatusesTypesOrderByWithRelationInput | StatusesTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusesTypes.
     */
    cursor?: StatusesTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusesTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusesTypes.
     */
    skip?: number
    distinct?: StatusesTypesScalarFieldEnum | StatusesTypesScalarFieldEnum[]
  }

  /**
   * StatusesTypes create
   */
  export type StatusesTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusesTypes.
     */
    data: XOR<StatusesTypesCreateInput, StatusesTypesUncheckedCreateInput>
  }

  /**
   * StatusesTypes createMany
   */
  export type StatusesTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusesTypes.
     */
    data: StatusesTypesCreateManyInput | StatusesTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusesTypes createManyAndReturn
   */
  export type StatusesTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * The data used to create many StatusesTypes.
     */
    data: StatusesTypesCreateManyInput | StatusesTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusesTypes update
   */
  export type StatusesTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusesTypes.
     */
    data: XOR<StatusesTypesUpdateInput, StatusesTypesUncheckedUpdateInput>
    /**
     * Choose, which StatusesTypes to update.
     */
    where: StatusesTypesWhereUniqueInput
  }

  /**
   * StatusesTypes updateMany
   */
  export type StatusesTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusesTypes.
     */
    data: XOR<StatusesTypesUpdateManyMutationInput, StatusesTypesUncheckedUpdateManyInput>
    /**
     * Filter which StatusesTypes to update
     */
    where?: StatusesTypesWhereInput
    /**
     * Limit how many StatusesTypes to update.
     */
    limit?: number
  }

  /**
   * StatusesTypes updateManyAndReturn
   */
  export type StatusesTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * The data used to update StatusesTypes.
     */
    data: XOR<StatusesTypesUpdateManyMutationInput, StatusesTypesUncheckedUpdateManyInput>
    /**
     * Filter which StatusesTypes to update
     */
    where?: StatusesTypesWhereInput
    /**
     * Limit how many StatusesTypes to update.
     */
    limit?: number
  }

  /**
   * StatusesTypes upsert
   */
  export type StatusesTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusesTypes to update in case it exists.
     */
    where: StatusesTypesWhereUniqueInput
    /**
     * In case the StatusesTypes found by the `where` argument doesn't exist, create a new StatusesTypes with this data.
     */
    create: XOR<StatusesTypesCreateInput, StatusesTypesUncheckedCreateInput>
    /**
     * In case the StatusesTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusesTypesUpdateInput, StatusesTypesUncheckedUpdateInput>
  }

  /**
   * StatusesTypes delete
   */
  export type StatusesTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
    /**
     * Filter which StatusesTypes to delete.
     */
    where: StatusesTypesWhereUniqueInput
  }

  /**
   * StatusesTypes deleteMany
   */
  export type StatusesTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusesTypes to delete
     */
    where?: StatusesTypesWhereInput
    /**
     * Limit how many StatusesTypes to delete.
     */
    limit?: number
  }

  /**
   * StatusesTypes.users
   */
  export type StatusesTypes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * StatusesTypes without action
   */
  export type StatusesTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusesTypes
     */
    select?: StatusesTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusesTypes
     */
    omit?: StatusesTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusesTypesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
    status_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
    role_id: bigint | null
    status_id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    password: string | null
    name: string | null
    role_id: bigint | null
    status_id: bigint | null
    last_activity: Date | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    password: string | null
    name: string | null
    role_id: bigint | null
    status_id: bigint | null
    last_activity: Date | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    role_id: number
    status_id: number
    last_activity: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    role_id?: true
    status_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    role_id?: true
    status_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role_id?: true
    status_id?: true
    last_activity?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role_id?: true
    status_id?: true
    last_activity?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role_id?: true
    status_id?: true
    last_activity?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    username: string
    password: string
    name: string
    role_id: bigint
    status_id: bigint
    last_activity: Date
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role_id?: boolean
    status_id?: boolean
    last_activity?: boolean
    created_at?: boolean
    role?: boolean | RolesTypesDefaultArgs<ExtArgs>
    status?: boolean | StatusesTypesDefaultArgs<ExtArgs>
    logs?: boolean | Users$logsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role_id?: boolean
    status_id?: boolean
    last_activity?: boolean
    created_at?: boolean
    role?: boolean | RolesTypesDefaultArgs<ExtArgs>
    status?: boolean | StatusesTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role_id?: boolean
    status_id?: boolean
    last_activity?: boolean
    created_at?: boolean
    role?: boolean | RolesTypesDefaultArgs<ExtArgs>
    status?: boolean | StatusesTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role_id?: boolean
    status_id?: boolean
    last_activity?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "role_id" | "status_id" | "last_activity" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesTypesDefaultArgs<ExtArgs>
    status?: boolean | StatusesTypesDefaultArgs<ExtArgs>
    logs?: boolean | Users$logsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesTypesDefaultArgs<ExtArgs>
    status?: boolean | StatusesTypesDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesTypesDefaultArgs<ExtArgs>
    status?: boolean | StatusesTypesDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      role: Prisma.$RolesTypesPayload<ExtArgs>
      status: Prisma.$StatusesTypesPayload<ExtArgs>
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      username: string
      password: string
      name: string
      role_id: bigint
      status_id: bigint
      last_activity: Date
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RolesTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesTypesDefaultArgs<ExtArgs>>): Prisma__RolesTypesClient<$Result.GetResult<Prisma.$RolesTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends StatusesTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusesTypesDefaultArgs<ExtArgs>>): Prisma__StatusesTypesClient<$Result.GetResult<Prisma.$StatusesTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logs<T extends Users$logsArgs<ExtArgs> = {}>(args?: Subset<T, Users$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'BigInt'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly role_id: FieldRef<"Users", 'BigInt'>
    readonly status_id: FieldRef<"Users", 'BigInt'>
    readonly last_activity: FieldRef<"Users", 'DateTime'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.logs
   */
  export type Users$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    userId: 'userId',
    timestamp: 'timestamp',
    details: 'details'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type_id: 'type_id',
    description: 'description',
    file_url: 'file_url',
    created_at: 'created_at'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const DocumentsTypesScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type DocumentsTypesScalarFieldEnum = (typeof DocumentsTypesScalarFieldEnum)[keyof typeof DocumentsTypesScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    type_id: 'type_id',
    title: 'title',
    description: 'description',
    image_url: 'image_url',
    created_at: 'created_at'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const NewsTypesScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type NewsTypesScalarFieldEnum = (typeof NewsTypesScalarFieldEnum)[keyof typeof NewsTypesScalarFieldEnum]


  export const RolesTypesScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type RolesTypesScalarFieldEnum = (typeof RolesTypesScalarFieldEnum)[keyof typeof RolesTypesScalarFieldEnum]


  export const StatusesTypesScalarFieldEnum: {
    id: 'id',
    status: 'status'
  };

  export type StatusesTypesScalarFieldEnum = (typeof StatusesTypesScalarFieldEnum)[keyof typeof StatusesTypesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    role_id: 'role_id',
    status_id: 'status_id',
    last_activity: 'last_activity',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: IntFilter<"Log"> | number
    action?: StringFilter<"Log"> | string
    entity?: StringFilter<"Log"> | string
    entityId?: BigIntFilter<"Log"> | bigint | number
    userId?: BigIntFilter<"Log"> | bigint | number
    timestamp?: DateTimeFilter<"Log"> | Date | string
    details?: JsonNullableFilter<"Log">
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    details?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    action?: StringFilter<"Log"> | string
    entity?: StringFilter<"Log"> | string
    entityId?: BigIntFilter<"Log"> | bigint | number
    userId?: BigIntFilter<"Log"> | bigint | number
    timestamp?: DateTimeFilter<"Log"> | Date | string
    details?: JsonNullableFilter<"Log">
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    details?: SortOrderInput | SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Log"> | number
    action?: StringWithAggregatesFilter<"Log"> | string
    entity?: StringWithAggregatesFilter<"Log"> | string
    entityId?: BigIntWithAggregatesFilter<"Log"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"Log"> | bigint | number
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    details?: JsonNullableWithAggregatesFilter<"Log">
  }

  export type DocumentsWhereInput = {
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    id?: BigIntFilter<"Documents"> | bigint | number
    title?: StringNullableFilter<"Documents"> | string | null
    type_id?: BigIntFilter<"Documents"> | bigint | number
    description?: StringNullableFilter<"Documents"> | string | null
    file_url?: StringNullableFilter<"Documents"> | string | null
    created_at?: DateTimeFilter<"Documents"> | Date | string
    type?: XOR<DocumentsTypesScalarRelationFilter, DocumentsTypesWhereInput>
  }

  export type DocumentsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    type_id?: SortOrder
    description?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    type?: DocumentsTypesOrderByWithRelationInput
  }

  export type DocumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    title?: StringNullableFilter<"Documents"> | string | null
    type_id?: BigIntFilter<"Documents"> | bigint | number
    description?: StringNullableFilter<"Documents"> | string | null
    file_url?: StringNullableFilter<"Documents"> | string | null
    created_at?: DateTimeFilter<"Documents"> | Date | string
    type?: XOR<DocumentsTypesScalarRelationFilter, DocumentsTypesWhereInput>
  }, "id">

  export type DocumentsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    type_id?: SortOrder
    description?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: DocumentsCountOrderByAggregateInput
    _avg?: DocumentsAvgOrderByAggregateInput
    _max?: DocumentsMaxOrderByAggregateInput
    _min?: DocumentsMinOrderByAggregateInput
    _sum?: DocumentsSumOrderByAggregateInput
  }

  export type DocumentsScalarWhereWithAggregatesInput = {
    AND?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    OR?: DocumentsScalarWhereWithAggregatesInput[]
    NOT?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Documents"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"Documents"> | string | null
    type_id?: BigIntWithAggregatesFilter<"Documents"> | bigint | number
    description?: StringNullableWithAggregatesFilter<"Documents"> | string | null
    file_url?: StringNullableWithAggregatesFilter<"Documents"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Documents"> | Date | string
  }

  export type DocumentsTypesWhereInput = {
    AND?: DocumentsTypesWhereInput | DocumentsTypesWhereInput[]
    OR?: DocumentsTypesWhereInput[]
    NOT?: DocumentsTypesWhereInput | DocumentsTypesWhereInput[]
    id?: BigIntFilter<"DocumentsTypes"> | bigint | number
    type?: StringFilter<"DocumentsTypes"> | string
    documents?: DocumentsListRelationFilter
  }

  export type DocumentsTypesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    documents?: DocumentsOrderByRelationAggregateInput
  }

  export type DocumentsTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    type?: string
    AND?: DocumentsTypesWhereInput | DocumentsTypesWhereInput[]
    OR?: DocumentsTypesWhereInput[]
    NOT?: DocumentsTypesWhereInput | DocumentsTypesWhereInput[]
    documents?: DocumentsListRelationFilter
  }, "id" | "type">

  export type DocumentsTypesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: DocumentsTypesCountOrderByAggregateInput
    _avg?: DocumentsTypesAvgOrderByAggregateInput
    _max?: DocumentsTypesMaxOrderByAggregateInput
    _min?: DocumentsTypesMinOrderByAggregateInput
    _sum?: DocumentsTypesSumOrderByAggregateInput
  }

  export type DocumentsTypesScalarWhereWithAggregatesInput = {
    AND?: DocumentsTypesScalarWhereWithAggregatesInput | DocumentsTypesScalarWhereWithAggregatesInput[]
    OR?: DocumentsTypesScalarWhereWithAggregatesInput[]
    NOT?: DocumentsTypesScalarWhereWithAggregatesInput | DocumentsTypesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"DocumentsTypes"> | bigint | number
    type?: StringWithAggregatesFilter<"DocumentsTypes"> | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: BigIntFilter<"News"> | bigint | number
    type_id?: BigIntFilter<"News"> | bigint | number
    title?: StringNullableFilter<"News"> | string | null
    description?: StringNullableFilter<"News"> | string | null
    image_url?: StringNullableFilter<"News"> | string | null
    created_at?: DateTimeFilter<"News"> | Date | string
    type?: XOR<NewsTypesScalarRelationFilter, NewsTypesWhereInput>
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    type_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    type?: NewsTypesOrderByWithRelationInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    type_id?: BigIntFilter<"News"> | bigint | number
    title?: StringNullableFilter<"News"> | string | null
    description?: StringNullableFilter<"News"> | string | null
    image_url?: StringNullableFilter<"News"> | string | null
    created_at?: DateTimeFilter<"News"> | Date | string
    type?: XOR<NewsTypesScalarRelationFilter, NewsTypesWhereInput>
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    type_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"News"> | bigint | number
    type_id?: BigIntWithAggregatesFilter<"News"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"News"> | string | null
    description?: StringNullableWithAggregatesFilter<"News"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"News"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type NewsTypesWhereInput = {
    AND?: NewsTypesWhereInput | NewsTypesWhereInput[]
    OR?: NewsTypesWhereInput[]
    NOT?: NewsTypesWhereInput | NewsTypesWhereInput[]
    id?: BigIntFilter<"NewsTypes"> | bigint | number
    type?: StringFilter<"NewsTypes"> | string
    news?: NewsListRelationFilter
  }

  export type NewsTypesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    news?: NewsOrderByRelationAggregateInput
  }

  export type NewsTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    type?: string
    AND?: NewsTypesWhereInput | NewsTypesWhereInput[]
    OR?: NewsTypesWhereInput[]
    NOT?: NewsTypesWhereInput | NewsTypesWhereInput[]
    news?: NewsListRelationFilter
  }, "id" | "type">

  export type NewsTypesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: NewsTypesCountOrderByAggregateInput
    _avg?: NewsTypesAvgOrderByAggregateInput
    _max?: NewsTypesMaxOrderByAggregateInput
    _min?: NewsTypesMinOrderByAggregateInput
    _sum?: NewsTypesSumOrderByAggregateInput
  }

  export type NewsTypesScalarWhereWithAggregatesInput = {
    AND?: NewsTypesScalarWhereWithAggregatesInput | NewsTypesScalarWhereWithAggregatesInput[]
    OR?: NewsTypesScalarWhereWithAggregatesInput[]
    NOT?: NewsTypesScalarWhereWithAggregatesInput | NewsTypesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"NewsTypes"> | bigint | number
    type?: StringWithAggregatesFilter<"NewsTypes"> | string
  }

  export type RolesTypesWhereInput = {
    AND?: RolesTypesWhereInput | RolesTypesWhereInput[]
    OR?: RolesTypesWhereInput[]
    NOT?: RolesTypesWhereInput | RolesTypesWhereInput[]
    id?: BigIntFilter<"RolesTypes"> | bigint | number
    role?: StringFilter<"RolesTypes"> | string
    users?: UsersListRelationFilter
  }

  export type RolesTypesOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    users?: UsersOrderByRelationAggregateInput
  }

  export type RolesTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    role?: string
    AND?: RolesTypesWhereInput | RolesTypesWhereInput[]
    OR?: RolesTypesWhereInput[]
    NOT?: RolesTypesWhereInput | RolesTypesWhereInput[]
    users?: UsersListRelationFilter
  }, "id" | "role">

  export type RolesTypesOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    _count?: RolesTypesCountOrderByAggregateInput
    _avg?: RolesTypesAvgOrderByAggregateInput
    _max?: RolesTypesMaxOrderByAggregateInput
    _min?: RolesTypesMinOrderByAggregateInput
    _sum?: RolesTypesSumOrderByAggregateInput
  }

  export type RolesTypesScalarWhereWithAggregatesInput = {
    AND?: RolesTypesScalarWhereWithAggregatesInput | RolesTypesScalarWhereWithAggregatesInput[]
    OR?: RolesTypesScalarWhereWithAggregatesInput[]
    NOT?: RolesTypesScalarWhereWithAggregatesInput | RolesTypesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"RolesTypes"> | bigint | number
    role?: StringWithAggregatesFilter<"RolesTypes"> | string
  }

  export type StatusesTypesWhereInput = {
    AND?: StatusesTypesWhereInput | StatusesTypesWhereInput[]
    OR?: StatusesTypesWhereInput[]
    NOT?: StatusesTypesWhereInput | StatusesTypesWhereInput[]
    id?: BigIntFilter<"StatusesTypes"> | bigint | number
    status?: StringFilter<"StatusesTypes"> | string
    users?: UsersListRelationFilter
  }

  export type StatusesTypesOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    users?: UsersOrderByRelationAggregateInput
  }

  export type StatusesTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    status?: string
    AND?: StatusesTypesWhereInput | StatusesTypesWhereInput[]
    OR?: StatusesTypesWhereInput[]
    NOT?: StatusesTypesWhereInput | StatusesTypesWhereInput[]
    users?: UsersListRelationFilter
  }, "id" | "status">

  export type StatusesTypesOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    _count?: StatusesTypesCountOrderByAggregateInput
    _avg?: StatusesTypesAvgOrderByAggregateInput
    _max?: StatusesTypesMaxOrderByAggregateInput
    _min?: StatusesTypesMinOrderByAggregateInput
    _sum?: StatusesTypesSumOrderByAggregateInput
  }

  export type StatusesTypesScalarWhereWithAggregatesInput = {
    AND?: StatusesTypesScalarWhereWithAggregatesInput | StatusesTypesScalarWhereWithAggregatesInput[]
    OR?: StatusesTypesScalarWhereWithAggregatesInput[]
    NOT?: StatusesTypesScalarWhereWithAggregatesInput | StatusesTypesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"StatusesTypes"> | bigint | number
    status?: StringWithAggregatesFilter<"StatusesTypes"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: BigIntFilter<"Users"> | bigint | number
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    role_id?: BigIntFilter<"Users"> | bigint | number
    status_id?: BigIntFilter<"Users"> | bigint | number
    last_activity?: DateTimeFilter<"Users"> | Date | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    role?: XOR<RolesTypesScalarRelationFilter, RolesTypesWhereInput>
    status?: XOR<StatusesTypesScalarRelationFilter, StatusesTypesWhereInput>
    logs?: LogListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    status_id?: SortOrder
    last_activity?: SortOrder
    created_at?: SortOrder
    role?: RolesTypesOrderByWithRelationInput
    status?: StatusesTypesOrderByWithRelationInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    role_id?: BigIntFilter<"Users"> | bigint | number
    status_id?: BigIntFilter<"Users"> | bigint | number
    last_activity?: DateTimeFilter<"Users"> | Date | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    role?: XOR<RolesTypesScalarRelationFilter, RolesTypesWhereInput>
    status?: XOR<StatusesTypesScalarRelationFilter, StatusesTypesWhereInput>
    logs?: LogListRelationFilter
  }, "id" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    status_id?: SortOrder
    last_activity?: SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Users"> | bigint | number
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    role_id?: BigIntWithAggregatesFilter<"Users"> | bigint | number
    status_id?: BigIntWithAggregatesFilter<"Users"> | bigint | number
    last_activity?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type LogCreateInput = {
    action: string
    entity: string
    entityId: bigint | number
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    user: UsersCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: number
    action: string
    entity: string
    entityId: bigint | number
    userId: bigint | number
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    user?: UsersUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogCreateManyInput = {
    id?: number
    action: string
    entity: string
    entityId: bigint | number
    userId: bigint | number
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentsCreateInput = {
    id?: bigint | number
    title?: string | null
    description?: string | null
    file_url?: string | null
    created_at?: Date | string
    type: DocumentsTypesCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentsUncheckedCreateInput = {
    id?: bigint | number
    title?: string | null
    type_id: bigint | number
    description?: string | null
    file_url?: string | null
    created_at?: Date | string
  }

  export type DocumentsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: DocumentsTypesUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsCreateManyInput = {
    id?: bigint | number
    title?: string | null
    type_id: bigint | number
    description?: string | null
    file_url?: string | null
    created_at?: Date | string
  }

  export type DocumentsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsTypesCreateInput = {
    id?: bigint | number
    type: string
    documents?: DocumentsCreateNestedManyWithoutTypeInput
  }

  export type DocumentsTypesUncheckedCreateInput = {
    id?: bigint | number
    type: string
    documents?: DocumentsUncheckedCreateNestedManyWithoutTypeInput
  }

  export type DocumentsTypesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    documents?: DocumentsUpdateManyWithoutTypeNestedInput
  }

  export type DocumentsTypesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    documents?: DocumentsUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type DocumentsTypesCreateManyInput = {
    id?: bigint | number
    type: string
  }

  export type DocumentsTypesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentsTypesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCreateInput = {
    id?: bigint | number
    title?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string
    type: NewsTypesCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: bigint | number
    type_id: bigint | number
    title?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type NewsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NewsTypesUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: bigint | number
    type_id: bigint | number
    title?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsTypesCreateInput = {
    id?: bigint | number
    type: string
    news?: NewsCreateNestedManyWithoutTypeInput
  }

  export type NewsTypesUncheckedCreateInput = {
    id?: bigint | number
    type: string
    news?: NewsUncheckedCreateNestedManyWithoutTypeInput
  }

  export type NewsTypesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    news?: NewsUpdateManyWithoutTypeNestedInput
  }

  export type NewsTypesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    news?: NewsUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type NewsTypesCreateManyInput = {
    id?: bigint | number
    type: string
  }

  export type NewsTypesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTypesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type RolesTypesCreateInput = {
    id?: bigint | number
    role: string
    users?: UsersCreateNestedManyWithoutRoleInput
  }

  export type RolesTypesUncheckedCreateInput = {
    id?: bigint | number
    role: string
    users?: UsersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesTypesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutRoleNestedInput
  }

  export type RolesTypesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesTypesCreateManyInput = {
    id?: bigint | number
    role: string
  }

  export type RolesTypesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RolesTypesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type StatusesTypesCreateInput = {
    id?: bigint | number
    status: string
    users?: UsersCreateNestedManyWithoutStatusInput
  }

  export type StatusesTypesUncheckedCreateInput = {
    id?: bigint | number
    status: string
    users?: UsersUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusesTypesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateManyWithoutStatusNestedInput
  }

  export type StatusesTypesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    users?: UsersUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusesTypesCreateManyInput = {
    id?: bigint | number
    status: string
  }

  export type StatusesTypesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StatusesTypesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    last_activity?: Date | string
    created_at?: Date | string
    role?: RolesTypesCreateNestedOneWithoutUsersInput
    status?: StatusesTypesCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    role_id?: bigint | number
    status_id?: bigint | number
    last_activity?: Date | string
    created_at?: Date | string
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesTypesUpdateOneRequiredWithoutUsersNestedInput
    status?: StatusesTypesUpdateOneRequiredWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status_id?: BigIntFieldUpdateOperationsInput | bigint | number
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    role_id?: bigint | number
    status_id?: bigint | number
    last_activity?: Date | string
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status_id?: BigIntFieldUpdateOperationsInput | bigint | number
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    details?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DocumentsTypesScalarRelationFilter = {
    is?: DocumentsTypesWhereInput
    isNot?: DocumentsTypesWhereInput
  }

  export type DocumentsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type_id?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    created_at?: SortOrder
  }

  export type DocumentsAvgOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type DocumentsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type_id?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    created_at?: SortOrder
  }

  export type DocumentsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type_id?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    created_at?: SortOrder
  }

  export type DocumentsSumOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DocumentsListRelationFilter = {
    every?: DocumentsWhereInput
    some?: DocumentsWhereInput
    none?: DocumentsWhereInput
  }

  export type DocumentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentsTypesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type DocumentsTypesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentsTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type DocumentsTypesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type DocumentsTypesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsTypesScalarRelationFilter = {
    is?: NewsTypesWhereInput
    isNot?: NewsTypesWhereInput
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsTypesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type NewsTypesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type NewsTypesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type NewsTypesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesTypesCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RolesTypesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RolesTypesMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RolesTypesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusesTypesCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type StatusesTypesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusesTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type StatusesTypesMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type StatusesTypesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesTypesScalarRelationFilter = {
    is?: RolesTypesWhereInput
    isNot?: RolesTypesWhereInput
  }

  export type StatusesTypesScalarRelationFilter = {
    is?: StatusesTypesWhereInput
    isNot?: StatusesTypesWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    status_id?: SortOrder
    last_activity?: SortOrder
    created_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    status_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    status_id?: SortOrder
    last_activity?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role_id?: SortOrder
    status_id?: SortOrder
    last_activity?: SortOrder
    created_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    status_id?: SortOrder
  }

  export type UsersCreateNestedOneWithoutLogsInput = {
    create?: XOR<UsersCreateWithoutLogsInput, UsersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLogsInput
    connect?: UsersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UsersCreateWithoutLogsInput, UsersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLogsInput
    upsert?: UsersUpsertWithoutLogsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLogsInput, UsersUpdateWithoutLogsInput>, UsersUncheckedUpdateWithoutLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentsTypesCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DocumentsTypesCreateWithoutDocumentsInput, DocumentsTypesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentsTypesCreateOrConnectWithoutDocumentsInput
    connect?: DocumentsTypesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DocumentsTypesUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DocumentsTypesCreateWithoutDocumentsInput, DocumentsTypesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentsTypesCreateOrConnectWithoutDocumentsInput
    upsert?: DocumentsTypesUpsertWithoutDocumentsInput
    connect?: DocumentsTypesWhereUniqueInput
    update?: XOR<XOR<DocumentsTypesUpdateToOneWithWhereWithoutDocumentsInput, DocumentsTypesUpdateWithoutDocumentsInput>, DocumentsTypesUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentsCreateNestedManyWithoutTypeInput = {
    create?: XOR<DocumentsCreateWithoutTypeInput, DocumentsUncheckedCreateWithoutTypeInput> | DocumentsCreateWithoutTypeInput[] | DocumentsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutTypeInput | DocumentsCreateOrConnectWithoutTypeInput[]
    createMany?: DocumentsCreateManyTypeInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type DocumentsUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<DocumentsCreateWithoutTypeInput, DocumentsUncheckedCreateWithoutTypeInput> | DocumentsCreateWithoutTypeInput[] | DocumentsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutTypeInput | DocumentsCreateOrConnectWithoutTypeInput[]
    createMany?: DocumentsCreateManyTypeInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type DocumentsUpdateManyWithoutTypeNestedInput = {
    create?: XOR<DocumentsCreateWithoutTypeInput, DocumentsUncheckedCreateWithoutTypeInput> | DocumentsCreateWithoutTypeInput[] | DocumentsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutTypeInput | DocumentsCreateOrConnectWithoutTypeInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutTypeInput | DocumentsUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: DocumentsCreateManyTypeInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutTypeInput | DocumentsUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutTypeInput | DocumentsUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type DocumentsUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<DocumentsCreateWithoutTypeInput, DocumentsUncheckedCreateWithoutTypeInput> | DocumentsCreateWithoutTypeInput[] | DocumentsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutTypeInput | DocumentsCreateOrConnectWithoutTypeInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutTypeInput | DocumentsUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: DocumentsCreateManyTypeInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutTypeInput | DocumentsUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutTypeInput | DocumentsUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type NewsTypesCreateNestedOneWithoutNewsInput = {
    create?: XOR<NewsTypesCreateWithoutNewsInput, NewsTypesUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsTypesCreateOrConnectWithoutNewsInput
    connect?: NewsTypesWhereUniqueInput
  }

  export type NewsTypesUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<NewsTypesCreateWithoutNewsInput, NewsTypesUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsTypesCreateOrConnectWithoutNewsInput
    upsert?: NewsTypesUpsertWithoutNewsInput
    connect?: NewsTypesWhereUniqueInput
    update?: XOR<XOR<NewsTypesUpdateToOneWithWhereWithoutNewsInput, NewsTypesUpdateWithoutNewsInput>, NewsTypesUncheckedUpdateWithoutNewsInput>
  }

  export type NewsCreateNestedManyWithoutTypeInput = {
    create?: XOR<NewsCreateWithoutTypeInput, NewsUncheckedCreateWithoutTypeInput> | NewsCreateWithoutTypeInput[] | NewsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTypeInput | NewsCreateOrConnectWithoutTypeInput[]
    createMany?: NewsCreateManyTypeInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<NewsCreateWithoutTypeInput, NewsUncheckedCreateWithoutTypeInput> | NewsCreateWithoutTypeInput[] | NewsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTypeInput | NewsCreateOrConnectWithoutTypeInput[]
    createMany?: NewsCreateManyTypeInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUpdateManyWithoutTypeNestedInput = {
    create?: XOR<NewsCreateWithoutTypeInput, NewsUncheckedCreateWithoutTypeInput> | NewsCreateWithoutTypeInput[] | NewsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTypeInput | NewsCreateOrConnectWithoutTypeInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTypeInput | NewsUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: NewsCreateManyTypeInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTypeInput | NewsUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTypeInput | NewsUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<NewsCreateWithoutTypeInput, NewsUncheckedCreateWithoutTypeInput> | NewsCreateWithoutTypeInput[] | NewsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTypeInput | NewsCreateOrConnectWithoutTypeInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTypeInput | NewsUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: NewsCreateManyTypeInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTypeInput | NewsUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTypeInput | NewsUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type UsersCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersCreateNestedManyWithoutStatusInput = {
    create?: XOR<UsersCreateWithoutStatusInput, UsersUncheckedCreateWithoutStatusInput> | UsersCreateWithoutStatusInput[] | UsersUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutStatusInput | UsersCreateOrConnectWithoutStatusInput[]
    createMany?: UsersCreateManyStatusInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<UsersCreateWithoutStatusInput, UsersUncheckedCreateWithoutStatusInput> | UsersCreateWithoutStatusInput[] | UsersUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutStatusInput | UsersCreateOrConnectWithoutStatusInput[]
    createMany?: UsersCreateManyStatusInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutStatusNestedInput = {
    create?: XOR<UsersCreateWithoutStatusInput, UsersUncheckedCreateWithoutStatusInput> | UsersCreateWithoutStatusInput[] | UsersUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutStatusInput | UsersCreateOrConnectWithoutStatusInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutStatusInput | UsersUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: UsersCreateManyStatusInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutStatusInput | UsersUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutStatusInput | UsersUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<UsersCreateWithoutStatusInput, UsersUncheckedCreateWithoutStatusInput> | UsersCreateWithoutStatusInput[] | UsersUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutStatusInput | UsersCreateOrConnectWithoutStatusInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutStatusInput | UsersUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: UsersCreateManyStatusInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutStatusInput | UsersUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutStatusInput | UsersUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type RolesTypesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesTypesCreateWithoutUsersInput, RolesTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesTypesCreateOrConnectWithoutUsersInput
    connect?: RolesTypesWhereUniqueInput
  }

  export type StatusesTypesCreateNestedOneWithoutUsersInput = {
    create?: XOR<StatusesTypesCreateWithoutUsersInput, StatusesTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: StatusesTypesCreateOrConnectWithoutUsersInput
    connect?: StatusesTypesWhereUniqueInput
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type RolesTypesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesTypesCreateWithoutUsersInput, RolesTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesTypesCreateOrConnectWithoutUsersInput
    upsert?: RolesTypesUpsertWithoutUsersInput
    connect?: RolesTypesWhereUniqueInput
    update?: XOR<XOR<RolesTypesUpdateToOneWithWhereWithoutUsersInput, RolesTypesUpdateWithoutUsersInput>, RolesTypesUncheckedUpdateWithoutUsersInput>
  }

  export type StatusesTypesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<StatusesTypesCreateWithoutUsersInput, StatusesTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: StatusesTypesCreateOrConnectWithoutUsersInput
    upsert?: StatusesTypesUpsertWithoutUsersInput
    connect?: StatusesTypesWhereUniqueInput
    update?: XOR<XOR<StatusesTypesUpdateToOneWithWhereWithoutUsersInput, StatusesTypesUpdateWithoutUsersInput>, StatusesTypesUncheckedUpdateWithoutUsersInput>
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersCreateWithoutLogsInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    last_activity?: Date | string
    created_at?: Date | string
    role?: RolesTypesCreateNestedOneWithoutUsersInput
    status?: StatusesTypesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutLogsInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    role_id?: bigint | number
    status_id?: bigint | number
    last_activity?: Date | string
    created_at?: Date | string
  }

  export type UsersCreateOrConnectWithoutLogsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLogsInput, UsersUncheckedCreateWithoutLogsInput>
  }

  export type UsersUpsertWithoutLogsInput = {
    update: XOR<UsersUpdateWithoutLogsInput, UsersUncheckedUpdateWithoutLogsInput>
    create: XOR<UsersCreateWithoutLogsInput, UsersUncheckedCreateWithoutLogsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLogsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLogsInput, UsersUncheckedUpdateWithoutLogsInput>
  }

  export type UsersUpdateWithoutLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesTypesUpdateOneRequiredWithoutUsersNestedInput
    status?: StatusesTypesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status_id?: BigIntFieldUpdateOperationsInput | bigint | number
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsTypesCreateWithoutDocumentsInput = {
    id?: bigint | number
    type: string
  }

  export type DocumentsTypesUncheckedCreateWithoutDocumentsInput = {
    id?: bigint | number
    type: string
  }

  export type DocumentsTypesCreateOrConnectWithoutDocumentsInput = {
    where: DocumentsTypesWhereUniqueInput
    create: XOR<DocumentsTypesCreateWithoutDocumentsInput, DocumentsTypesUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentsTypesUpsertWithoutDocumentsInput = {
    update: XOR<DocumentsTypesUpdateWithoutDocumentsInput, DocumentsTypesUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DocumentsTypesCreateWithoutDocumentsInput, DocumentsTypesUncheckedCreateWithoutDocumentsInput>
    where?: DocumentsTypesWhereInput
  }

  export type DocumentsTypesUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DocumentsTypesWhereInput
    data: XOR<DocumentsTypesUpdateWithoutDocumentsInput, DocumentsTypesUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentsTypesUpdateWithoutDocumentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentsTypesUncheckedUpdateWithoutDocumentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentsCreateWithoutTypeInput = {
    id?: bigint | number
    title?: string | null
    description?: string | null
    file_url?: string | null
    created_at?: Date | string
  }

  export type DocumentsUncheckedCreateWithoutTypeInput = {
    id?: bigint | number
    title?: string | null
    description?: string | null
    file_url?: string | null
    created_at?: Date | string
  }

  export type DocumentsCreateOrConnectWithoutTypeInput = {
    where: DocumentsWhereUniqueInput
    create: XOR<DocumentsCreateWithoutTypeInput, DocumentsUncheckedCreateWithoutTypeInput>
  }

  export type DocumentsCreateManyTypeInputEnvelope = {
    data: DocumentsCreateManyTypeInput | DocumentsCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type DocumentsUpsertWithWhereUniqueWithoutTypeInput = {
    where: DocumentsWhereUniqueInput
    update: XOR<DocumentsUpdateWithoutTypeInput, DocumentsUncheckedUpdateWithoutTypeInput>
    create: XOR<DocumentsCreateWithoutTypeInput, DocumentsUncheckedCreateWithoutTypeInput>
  }

  export type DocumentsUpdateWithWhereUniqueWithoutTypeInput = {
    where: DocumentsWhereUniqueInput
    data: XOR<DocumentsUpdateWithoutTypeInput, DocumentsUncheckedUpdateWithoutTypeInput>
  }

  export type DocumentsUpdateManyWithWhereWithoutTypeInput = {
    where: DocumentsScalarWhereInput
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyWithoutTypeInput>
  }

  export type DocumentsScalarWhereInput = {
    AND?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
    OR?: DocumentsScalarWhereInput[]
    NOT?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
    id?: BigIntFilter<"Documents"> | bigint | number
    title?: StringNullableFilter<"Documents"> | string | null
    type_id?: BigIntFilter<"Documents"> | bigint | number
    description?: StringNullableFilter<"Documents"> | string | null
    file_url?: StringNullableFilter<"Documents"> | string | null
    created_at?: DateTimeFilter<"Documents"> | Date | string
  }

  export type NewsTypesCreateWithoutNewsInput = {
    id?: bigint | number
    type: string
  }

  export type NewsTypesUncheckedCreateWithoutNewsInput = {
    id?: bigint | number
    type: string
  }

  export type NewsTypesCreateOrConnectWithoutNewsInput = {
    where: NewsTypesWhereUniqueInput
    create: XOR<NewsTypesCreateWithoutNewsInput, NewsTypesUncheckedCreateWithoutNewsInput>
  }

  export type NewsTypesUpsertWithoutNewsInput = {
    update: XOR<NewsTypesUpdateWithoutNewsInput, NewsTypesUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsTypesCreateWithoutNewsInput, NewsTypesUncheckedCreateWithoutNewsInput>
    where?: NewsTypesWhereInput
  }

  export type NewsTypesUpdateToOneWithWhereWithoutNewsInput = {
    where?: NewsTypesWhereInput
    data: XOR<NewsTypesUpdateWithoutNewsInput, NewsTypesUncheckedUpdateWithoutNewsInput>
  }

  export type NewsTypesUpdateWithoutNewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTypesUncheckedUpdateWithoutNewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCreateWithoutTypeInput = {
    id?: bigint | number
    title?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type NewsUncheckedCreateWithoutTypeInput = {
    id?: bigint | number
    title?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type NewsCreateOrConnectWithoutTypeInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutTypeInput, NewsUncheckedCreateWithoutTypeInput>
  }

  export type NewsCreateManyTypeInputEnvelope = {
    data: NewsCreateManyTypeInput | NewsCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutTypeInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutTypeInput, NewsUncheckedUpdateWithoutTypeInput>
    create: XOR<NewsCreateWithoutTypeInput, NewsUncheckedCreateWithoutTypeInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutTypeInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutTypeInput, NewsUncheckedUpdateWithoutTypeInput>
  }

  export type NewsUpdateManyWithWhereWithoutTypeInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutTypeInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: BigIntFilter<"News"> | bigint | number
    type_id?: BigIntFilter<"News"> | bigint | number
    title?: StringNullableFilter<"News"> | string | null
    description?: StringNullableFilter<"News"> | string | null
    image_url?: StringNullableFilter<"News"> | string | null
    created_at?: DateTimeFilter<"News"> | Date | string
  }

  export type UsersCreateWithoutRoleInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    last_activity?: Date | string
    created_at?: Date | string
    status?: StatusesTypesCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRoleInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    status_id?: bigint | number
    last_activity?: Date | string
    created_at?: Date | string
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRoleInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersCreateManyRoleInputEnvelope = {
    data: UsersCreateManyRoleInput | UsersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
  }

  export type UsersUpdateManyWithWhereWithoutRoleInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRoleInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: BigIntFilter<"Users"> | bigint | number
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    role_id?: BigIntFilter<"Users"> | bigint | number
    status_id?: BigIntFilter<"Users"> | bigint | number
    last_activity?: DateTimeFilter<"Users"> | Date | string
    created_at?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersCreateWithoutStatusInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    last_activity?: Date | string
    created_at?: Date | string
    role?: RolesTypesCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutStatusInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    role_id?: bigint | number
    last_activity?: Date | string
    created_at?: Date | string
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutStatusInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutStatusInput, UsersUncheckedCreateWithoutStatusInput>
  }

  export type UsersCreateManyStatusInputEnvelope = {
    data: UsersCreateManyStatusInput | UsersCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutStatusInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutStatusInput, UsersUncheckedUpdateWithoutStatusInput>
    create: XOR<UsersCreateWithoutStatusInput, UsersUncheckedCreateWithoutStatusInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutStatusInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutStatusInput, UsersUncheckedUpdateWithoutStatusInput>
  }

  export type UsersUpdateManyWithWhereWithoutStatusInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutStatusInput>
  }

  export type RolesTypesCreateWithoutUsersInput = {
    id?: bigint | number
    role: string
  }

  export type RolesTypesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    role: string
  }

  export type RolesTypesCreateOrConnectWithoutUsersInput = {
    where: RolesTypesWhereUniqueInput
    create: XOR<RolesTypesCreateWithoutUsersInput, RolesTypesUncheckedCreateWithoutUsersInput>
  }

  export type StatusesTypesCreateWithoutUsersInput = {
    id?: bigint | number
    status: string
  }

  export type StatusesTypesUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    status: string
  }

  export type StatusesTypesCreateOrConnectWithoutUsersInput = {
    where: StatusesTypesWhereUniqueInput
    create: XOR<StatusesTypesCreateWithoutUsersInput, StatusesTypesUncheckedCreateWithoutUsersInput>
  }

  export type LogCreateWithoutUserInput = {
    action: string
    entity: string
    entityId: bigint | number
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    entity: string
    entityId: bigint | number
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RolesTypesUpsertWithoutUsersInput = {
    update: XOR<RolesTypesUpdateWithoutUsersInput, RolesTypesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesTypesCreateWithoutUsersInput, RolesTypesUncheckedCreateWithoutUsersInput>
    where?: RolesTypesWhereInput
  }

  export type RolesTypesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesTypesWhereInput
    data: XOR<RolesTypesUpdateWithoutUsersInput, RolesTypesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesTypesUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RolesTypesUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type StatusesTypesUpsertWithoutUsersInput = {
    update: XOR<StatusesTypesUpdateWithoutUsersInput, StatusesTypesUncheckedUpdateWithoutUsersInput>
    create: XOR<StatusesTypesCreateWithoutUsersInput, StatusesTypesUncheckedCreateWithoutUsersInput>
    where?: StatusesTypesWhereInput
  }

  export type StatusesTypesUpdateToOneWithWhereWithoutUsersInput = {
    where?: StatusesTypesWhereInput
    data: XOR<StatusesTypesUpdateWithoutUsersInput, StatusesTypesUncheckedUpdateWithoutUsersInput>
  }

  export type StatusesTypesUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StatusesTypesUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: IntFilter<"Log"> | number
    action?: StringFilter<"Log"> | string
    entity?: StringFilter<"Log"> | string
    entityId?: BigIntFilter<"Log"> | bigint | number
    userId?: BigIntFilter<"Log"> | bigint | number
    timestamp?: DateTimeFilter<"Log"> | Date | string
    details?: JsonNullableFilter<"Log">
  }

  export type DocumentsCreateManyTypeInput = {
    id?: bigint | number
    title?: string | null
    description?: string | null
    file_url?: string | null
    created_at?: Date | string
  }

  export type DocumentsUpdateWithoutTypeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateWithoutTypeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsUncheckedUpdateManyWithoutTypeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyTypeInput = {
    id?: bigint | number
    title?: string | null
    description?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type NewsUpdateWithoutTypeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateWithoutTypeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyWithoutTypeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyRoleInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    status_id?: bigint | number
    last_activity?: Date | string
    created_at?: Date | string
  }

  export type UsersUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusesTypesUpdateOneRequiredWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status_id?: BigIntFieldUpdateOperationsInput | bigint | number
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status_id?: BigIntFieldUpdateOperationsInput | bigint | number
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyStatusInput = {
    id?: bigint | number
    username: string
    password: string
    name: string
    role_id?: bigint | number
    last_activity?: Date | string
    created_at?: Date | string
  }

  export type UsersUpdateWithoutStatusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesTypesUpdateOneRequiredWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutStatusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role_id?: BigIntFieldUpdateOperationsInput | bigint | number
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutStatusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role_id?: BigIntFieldUpdateOperationsInput | bigint | number
    last_activity?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyUserInput = {
    id?: number
    action: string
    entity: string
    entityId: bigint | number
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}